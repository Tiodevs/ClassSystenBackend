import prismaClient from "../../prisma"

interface Req {
    user_id: string
}

class CreateUserStreakService {
    async execute({ user_id }: Req) {

        const userStreak = await prismaClient.userStreak.create({
            data: {
                userId: user_id,
                currentStreak: 1, // Começa com 1 dia de streak
                lastAccess: new Date(),
                maxStreak: 1,
            },
            include:{
                user: true
            }
        })
        return userStreak
    }
}

export { CreateUserStreakService }