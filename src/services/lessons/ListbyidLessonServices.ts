import prismaClient from "../../prisma";

interface UserReq{
    course_id: string
}

class ListbyidLessonServices {
    async execute({course_id}: UserReq){

        const userCurses = prismaClient.lesson.findMany({
            where: {
                courseId: course_id
            },
            orderBy: {
                title: 'asc',
            },
            include: {
                progress: true,
            },
        })

        return userCurses
    }
}

export { ListbyidLessonServices }