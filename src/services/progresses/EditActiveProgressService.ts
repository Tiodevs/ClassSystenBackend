import prismaClient from "../../prisma";

class EditActivePogressService {
    async execute({ lesson_id }: any) {

        // Primeiro, busque o usuário pelo ID
        const progress = await prismaClient.progress.findUnique({
            where: { id: lesson_id }
        });

        if (!progress) {
            throw new Error('Progress not found');
        }

        // Inverta o valor de "active" (se for true, muda para false e vice-versa)
        const updatedCProgress = await prismaClient.progress.update({
            where: { id: lesson_id },
            data: {
                completed: !progress.completed
            }
        });

        return updatedCProgress;
    }
}

export { EditActivePogressService }