// src/server/db/client.ts
import { PrismaClient } from '@prisma/client'

declare global {
    var prisma: PrismaClient | undefined
}

const prisma =
    global.prisma ||
    new PrismaClient({
        log: [
            {
                emit: 'event',
                level: 'query',
            },
            'info',
            'warn',
            'error',
        ],
    })

if (process.env.NODE_ENV !== 'production') {
    global.prisma = prisma
}

export default prisma