import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      avatar?: string | null;
      isAdmin?: boolean | null;
    };
  }

  interface User {
    id: string;
    isAdmin: boolean;
  }

  interface JWT {
    id: string;
    isAdmin: boolean;
  }
}
