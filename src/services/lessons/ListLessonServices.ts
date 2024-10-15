import prismaClient from "../../prisma";

class ListLessonService {
    async execute() {

        const lessons = await prismaClient.lesson.findMany({
            
            orderBy: {
                title: 'asc',
            },
            include:{
                progress: true
            }
        })
    
        return lessons
    }
}

export { ListLessonService }