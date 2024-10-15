import prismaClient from "../../prisma";

class ListCourseService {
    async execute() {

        const courses = await prismaClient.course.findMany({
            orderBy: {
                name: 'asc',
              },
              include:{
                lessons: true
              }
        })
    
        return courses
    }
}

export { ListCourseService }