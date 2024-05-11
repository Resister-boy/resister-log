import type { Metadata } from "next";
import '@/styles/globals.scss';
import { Session } from "next-auth";
import NextAuthProvider from "@/provider/NextAuthProvider";
import ReduxProvider from "@/provider/ReduxProvider";
import BaseProvider from "@/provider";

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "RESISTER.LOG",
  description: "Welcome to resister-boy's logging site.",
};

export default function RootLayout({
  children,
  params: { session },
}: Readonly<{
  children: React.ReactNode;
  params: { session: Session };
}>) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider session={session}>
          <ReduxProvider>
            <BaseProvider>
              {children}
            </BaseProvider>
          </ReduxProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
