import { Prisma } from '@prisma/client'
import prisma from '../src/server/db/client'

// const userData: Prisma.UserCreateInput[] = [
//     {
//         codice: '15725016189159',
//         stato: false,
//     },
//     {
//         codice: '21721418013750',
//         stato: false,
//     },
// ]

async function main() {
    console.log('Start seeding ...')
    // await prisma.user.deleteMany({})
    // const users = await prisma.user.createMany({
    //     data: userData,
    // })
    // console.log('🚀 - file: seed.ts - line 36 - main - user', users)
    // eslint-disable-next-line quotes
    console.log(`Seeding finished.`)
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
