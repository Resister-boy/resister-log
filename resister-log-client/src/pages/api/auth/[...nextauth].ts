import NextAuth, { Profile, Session } from 'next-auth';
import { NextApiRequest, NextApiResponse } from 'next';
import TwitterProvider from 'next-auth/providers/twitter';
import { AdapterUser } from 'next-auth/adapters';
import { JWT } from 'next-auth/jwt';
import axios from 'axios';

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, {
    providers: [
      TwitterProvider({
        clientId: process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID || '',
        clientSecret: process.env.NEXT_PUBLIC_TWITTER_CLIENT_SECRET || '',
        version: '2.0',
      }),
    ],
    callbacks: {
      async session({
        session,
        token,
        user,
      }: {
        session: Session;
        token: JWT;
        user: AdapterUser;
      }) {
        if (token.sub) {
          session.accessToken = token.sub;
        }

        return session;
      },
      signIn: async ({ profile }) => {
        const res = true;
        const data = {
          id: profile?.data.id,
          username: profile?.data.username,
          profile_image_url: profile?.data.profile_image_url,
        };

        // const res = await axios.post(
        //   `https://supersquad.store/users/signup`,
        //   data,
        // );

        if (res) {
          return true;
        } else {
          return false;
        }
      },
    },
    session: {
      strategy: 'jwt',
    },
    secret: process.env.NEXT_AUTH_SECRET,
  });
