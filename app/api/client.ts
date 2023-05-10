import { PrismaClient } from "@prisma/client";

let prism: PrismaClient;

if (process.env.NODE_ENV !== "production") {
    prism = new PrismaClient();
} else {
    if (!(global as any).prsima) {
        (global as any).prsima = new PrismaClient();
    }
    prism = (global as any).prsima;
}

export const prisma = prism;
