import prismaClient from "../../prisma"

interface LessonRequest {
  title: string,
  course_id: string,
  content: string,
  url: string
}

class CreateLessonService {
  async execute({ title, course_id, content, url }: LessonRequest) {

    if (!title) {
      throw new Error("Não forneceu o name")
    }

    const lessonExists = await prismaClient.lesson.findFirst({
      where: {
        title: title
      }
    })

    if (lessonExists) {
      throw new Error("Curso já cadastrado")
    }


    const lesson = await prismaClient.lesson.create({
      data: {
        title: title,
        courseId: course_id,
        content: content,
        url: url
      },
      select: {
        id: true,
        title: true,
        courseId: true
      }
    })

    return lesson

  }
}

export { CreateLessonService }