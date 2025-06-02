// keystone/scripts/clean-image-quotes.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Fix Services
  const services = await prisma.service.findMany({
    select: { id: true, image: true },
  });
  for (const s of services) {
    if (
      typeof s.image === 'string' &&
      s.image.startsWith('"') &&
      s.image.endsWith('"')
    ) {
      const cleaned = s.image.slice(1, -1);
      await prisma.service.update({
        where: { id: s.id },
        data: { image: cleaned },
      });
      console.log(`✂️  service.${s.id} cleaned`);
    }
  }

  // Fix Brands
  const brands = await prisma.brand.findMany({
    select: { id: true, image: true },
  });
  for (const b of brands) {
    if (
      typeof b.image === 'string' &&
      b.image.startsWith('"') &&
      b.image.endsWith('"')
    ) {
      const cleaned = b.image.slice(1, -1);
      await prisma.brand.update({
        where: { id: b.id },
        data: { image: cleaned },
      });
      console.log(`✂️  brand.${b.id} cleaned`);
    }
  }

  console.log('✅ Done cleaning image URLs');
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
