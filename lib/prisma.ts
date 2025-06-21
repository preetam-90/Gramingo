// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - prisma client will be generated after migrations
import pkg from "@prisma/client"

// dynamically get PrismaClient to avoid type errors pre-generate
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { PrismaClient } = pkg as any

// Prevent multiple instances in development
const globalForPrisma = globalThis as unknown as {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prisma: any
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "info", "warn"] : ["error"],
  })

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

export default prisma