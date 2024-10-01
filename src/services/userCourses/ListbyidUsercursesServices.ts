import prismaClient from "../../prisma";

interface UserReq{
    user_id: string
}

class ListabyidUsercoursesService {
    async execute({user_id}: UserReq){

        console.log(user_id)
        const userCurses = prismaClient.userCourse.findMany({
            where:{
                userId: user_id
            }
        })

        return userCurses
    }
}

export { ListabyidUsercoursesService }