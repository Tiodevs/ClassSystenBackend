import prismaClient from "../../prisma"

class ListUserService {
    async execute(){

        const listUsers = prismaClient.user.findMany({
            orderBy: {
                name: 'asc',
            },
            include: {
                progress: true,
                courses: {
                    include: {
                        course: true
                    }
                }
            }
        }) 

        return listUsers
    }
}

export {ListUserService}