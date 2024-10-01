import prismaClient from "../../prisma"

interface CourseRequest {
  name: string
  description: string
}

class CreateCourseService {
  async execute({ name, description }: CourseRequest) {

    if (!name) {
      throw new Error("Não forneceu o name")
    }
    if (!description) {
      throw new Error("Nome a descrição")
    }


    const courseExists = await prismaClient.course.findFirst({
      where: {
        name: name
      }
    })

    if (courseExists) {
      throw new Error("Curso já cadastrado")
    }


    const course = await prismaClient.course.create({
      data: {
        name: name,
        description: description
      },
      select: {
        id: true,
        name: true,
        description: true
      }
    })

    return course

  }
}

export { CreateCourseService }