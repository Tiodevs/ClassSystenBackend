import prismaClient from "../../prisma";

class ListLessonService {
    async execute() {

        const lessons = await prismaClient.lesson.findMany()
    
        return lessons
    }
}

export { ListLessonService }