import prismaClient from "../../prisma"

interface Usercourse{
    user_id: string
    course_id: string
}

class CreateUsercoursesService {
    async execute({user_id, course_id}: Usercourse){

        const userCourses = await prismaClient.userCourse.create({
            data:{
                userId: user_id,
                courseId: course_id 
            },
            select: {
              id: true,
              userId: true,
              courseId: true,
            }
        })
        return userCourses
    }
}

export {CreateUsercoursesService}