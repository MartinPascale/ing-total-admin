// auth.ts
import { createAuth } from '@keystone-6/auth';
import { statelessSessions } from '@keystone-6/core/session';
import { randomBytes } from 'node:crypto';
import dotenv from 'dotenv';

dotenv.config();

// 1) Session setup
const sessionSecret = process.env.SESSION_SECRET!;
if (!sessionSecret) {
  throw new Error('SESSION_SECRET must be set in your .env');
}
const sessionMaxAge = 60 * 60 * 24 * 30; // 30 days

export const session = statelessSessions({
  maxAge: sessionMaxAge,
  secret: sessionSecret,
});

// 2) createAuth: tells Keystone how to do login + first-user flow
export const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  sessionData: 'name createdAt',

  // This is the “create first user” flow. If the User table is empty,
  // show a form to let the first user sign up.
  initFirstItem: {
    fields: ['name', 'email', 'password'],
  },
});
