import prismaClient from "../../prisma"

interface ProgressRequest {
  title: string,
  date: string,
  place: string,
  duration: string,
  userId: string;
}

class CreateEventService {
  async execute({ title, date, place, duration, userId }: ProgressRequest) {

    if (!title) {
      throw new Error("Não forneceu o title")
    }

    if (!date) {
      throw new Error("Não forneceu o date")
    }

    if (!place) {
      throw new Error("Não forneceu o place")
    }

    if (!duration) {
      throw new Error("Não forneceu o duration")
    }

    if (!userId) {
      throw new Error("Não forneceu o userId")
    }

    const events = await prismaClient.event.create({
      data: {
        title: title,
        date: date,
        place: place,
        duration: duration,
        userId: userId,
      },
      select: {
        title: true,
        date: true,
        place: true,
        duration: true
      }
    })

    return events

  }
}

export { CreateEventService }