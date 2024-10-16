import prismaClient from "../../prisma";

class DetailUserService {
    async execute(user_id:string) {
        const user = await prismaClient.user.findFirst({
            where: { id: user_id },
            select: {
                id: true,
                name: true,
                email: true,
                Streak: true,
                adm: true,
                photourl:true,
                active: true,
                courses: true,
                events: true,
                progress: true
            }
        })

        return user
    }
}

export { DetailUserService }