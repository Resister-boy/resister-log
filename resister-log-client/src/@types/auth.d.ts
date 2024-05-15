import NextAuth, { DefaultSession, User } from 'next-auth';

export declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id?: string;
    } & DefaultSession['user'];
    accessToken: string;
  }

  interface Profile {
    data: {
      username: string;
      profile_image_url: string;
      name: string;
      id: string;
    };
  }
}
