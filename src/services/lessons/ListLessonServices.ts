import prismaClient from "../../prisma";

class ListLessonService {
    async execute() {

        const lessons = await prismaClient.lesson.findMany({
            
            orderBy: {
                title: 'asc',
            }
        })
    
        return lessons
    }
}

export { ListLessonService }