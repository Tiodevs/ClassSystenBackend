import  prismaClient  from "../../prisma"

interface ItemRequest {
lesson_id: string
}

class DeleteLessonService {
  async execute({ lesson_id }: ItemRequest) {

    console.log("chegou aqui")

    const progress = await prismaClient.progress.deleteMany({
        where: {
            lessonId: lesson_id
          }
      })
      
    const lesson = await prismaClient.lesson.delete({
      where: {
        id: lesson_id
      }
    })



    return lesson
  }
}

export { DeleteLessonService }