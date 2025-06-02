// keystone.ts
import { config } from '@keystone-6/core';
import { lists } from './schema';
import dotenv from 'dotenv';
import { withAuth, session } from './auth'; // <-- pull in both

dotenv.config();

const dbUrl = process.env.DATABASE_URL!;
if (!dbUrl) {
  throw new Error('DATABASE_URL must be set in .env');
}

// Notice: we do NOT call statelessSessions() again here.
// We reuse “session” from auth.ts so that Keystone inserts the
// “first-user” behavior and also knows how to sign in/out.

export default withAuth(
  config({
    db: {
      provider: 'postgresql',
      url: dbUrl,
    },
    lists,
    // use the same “session” that createAuth provided
    session,

    ui: {
      // Only allow access to Admin UI if the user is signed in
      // (once a user exists and you log in).
      // BEFORE there is any user, initFirstItem will override
      // and show you the “create first user” screen automatically.
      isAccessAllowed: (context) => !!context.session?.data,
    },

    server: {
      cors: { origin: true, credentials: true },
    },
  }),
);
