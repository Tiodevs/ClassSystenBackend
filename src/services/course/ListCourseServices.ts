import prismaClient from "../../prisma";

class ListCourseService {
    async execute() {

        const courses = await prismaClient.course.findMany()
    
        return courses
    }
}

export { ListCourseService }