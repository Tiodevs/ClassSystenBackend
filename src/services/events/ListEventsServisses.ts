import prismaClient from "../../prisma";

class ListEventsService {
  async execute(userId: string) {

    const events = await prismaClient.event.findMany({
      where: {
        userId: userId, // Filtra eventos para o usuário específico
      },
      orderBy: {
        createdAt: 'desc', // Ordena pela data mais recente
      },
    });

    return events;
  }
}

export { ListEventsService };