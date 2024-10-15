import  prismaClient  from "../../prisma"

interface ItemRequest {
  event_id: string
}

class DeleteEventsService {
  async execute({ event_id }: ItemRequest) {

    console.log("chegou aqui")
      
    const lesson = await prismaClient.event.delete({
      where: {
        id: event_id
      }
    })

    return lesson
  }
}

export { DeleteEventsService }