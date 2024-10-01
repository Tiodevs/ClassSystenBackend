import prismaClient from "../../prisma";

interface EditReq {
    user_id: any
}

class EditActiveUserService {
    async execute({ user_id }: any) {

        // Primeiro, busque o usuário pelo ID
        const user = await prismaClient.user.findUnique({
            where: { id: user_id }
        });

        if (!user) {
            throw new Error('User not found');
        }

        // Inverta o valor de "active" (se for true, muda para false e vice-versa)
        const updatedUser = await prismaClient.user.update({
            where: { id: user_id },
            data: {
                active: !user.active
            }
        });

        return updatedUser;
    }
}

export { EditActiveUserService }