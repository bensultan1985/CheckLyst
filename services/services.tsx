import { Prisma, PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

export const createUser = async (user: any) => {
  const data = JSON.parse(user);
  const newUser: Prisma.UserCreateInput = {
    name: data.name ?? data.name,
    email: data.email ?? data.email,
    image: data.image ?? data.image,
    accounts: data.accounts ?? data.accounts,
    sessions: data.sessions ?? data.sessions,
    type: data.type ?? data.type,
    password: data.password ?? data.password,
  };
  const createdUser = await prisma.user.create({ data: newUser });
  await prisma.$disconnect();
};

const userService = {
  createUser,
};

export { userService };
