import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const getSession = () => getServerSession(authOptions);

export const requireAdmin = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user?.isAdmin) {
    const err = new Error("FORBIDDEN");
    // @ts-expect-error add status
    err.status = 403;
    throw err;
  }
  return session;
};
