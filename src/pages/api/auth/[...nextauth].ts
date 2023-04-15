import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

import prisma from '@/server/db';

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET || '',
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
    })
  ]
});
