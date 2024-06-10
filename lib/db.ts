// noinspection ES6ConvertVarToLetConst

import {PrismaClient} from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

// This if is preventing form having too many prisma client in dev env because of Next.js hot-load
// And globalThis is not affected by the hot-reload
if(process.env.NODE_ENV !== "production") globalThis.prisma = db;