import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';

import {
  text,
  relationship,
  password,
  timestamp,
} from '@keystone-6/core/fields';
import { cloudinaryImage } from '@keystone-6/cloudinary';

const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME!,
  apiKey: process.env.CLOUDINARY_KEY!,
  apiSecret: process.env.CLOUDINARY_SECRET!,
  folder: 'images',
};

export const lists = {
  User: list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),

      email: text({
        validation: { isRequired: true },
        isIndexed: 'unique',
      }),

      password: password({ validation: { isRequired: true } }),
      createdAt: timestamp({
        defaultValue: { kind: 'now' },
      }),
    },
  }),

  Brand: list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      description: text(),
      image: cloudinaryImage({ cloudinary, label: 'Service Image' }),
      services: relationship({ ref: 'Service.brand', many: true }),
    },
  }),

  // 3) Service table
  Service: list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      // Optional fields
      description: text(),

      image: cloudinaryImage({ cloudinary, label: 'Brand Logo' }),
      failures: text(),
      failureCodes: text(),
      components: text(),
      models: text(),
      years: text(),
      brand: relationship({ ref: 'Brand.services' }),
    },
  }),
};
