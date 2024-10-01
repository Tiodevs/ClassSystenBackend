import prismaClient from "../../prisma"

interface ProgressRequest {
  completed: boolean,
  user_id: string,
  lesson_id: string,
}

class CreateProgressService {
  async execute({ completed, user_id, lesson_id }: ProgressRequest) {

    if (!completed) {
      throw new Error("Não forneceu o completed")
    }

    if (!user_id) {
      throw new Error("Não forneceu o user_id")
    }

    if (!lesson_id) {
      throw new Error("Não forneceu o lesson_id")
    }

    const progress = await prismaClient.progress.create({
      data: {
        completed: true,
        userId: user_id,
        lessonId: lesson_id,
        completedAt: new Date()
      },
      select: {
        id: true,
        completed: true,
        userId: true,
        lessonId: true
      }
    })

    return progress

  }
}

export { CreateProgressService }