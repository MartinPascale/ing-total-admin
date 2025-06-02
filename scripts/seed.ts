import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { services, brands } from './data';

const prisma = new PrismaClient();

async function main() {
  // 1) clear existing data
  await prisma.service.deleteMany();
  await prisma.brand.deleteMany();

  // 2) seed brands
  const brandIdMap: Record<string, string> = {};
  for (const b of brands) {
    const created = await prisma.brand.create({
      data: {
        name: b.name,
        description: b.description || '',
        image: b.image || '',
      },
    });
    brandIdMap[b.id] = created.id;
  }

  // 3) seed services
  for (const s of services) {
    const data: any = {
      name: s.name,
      description: s.description || '',
      image: s.image || '',
      failures: s.failures || '',
      failureCodes: s.failureCodes || '',
      components: s.components || '',
      models: s.models || '',
      years: s.years || '',
    };
    if (s.brand && brandIdMap[s.brand]) {
      data.brand = { connect: { id: brandIdMap[s.brand] } };
    }
    await prisma.service.create({ data });
  }

  console.log('✅  Seed complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
