import prismaClient from "../../prisma";

class ListaUsercoursesService {
    async execute(){

        const userCurses = prismaClient.userCourse.findMany({
            include:{
                course: true,
                user: true
            }
        })

        return userCurses
    }
}

export { ListaUsercoursesService }