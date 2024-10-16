import prismaClient from "../../prisma"
import { differenceInCalendarDays } from 'date-fns';


interface Req {
    userId: any
}

class UpdateUserStreakService {
    async execute({ userId }: Req) {

        const userStreak = await prismaClient.userStreak.findFirst({
            where: {
                userId
            },
        });

        if (!userStreak) {
            return { error: 'UserStreak não encontrado' }
        }

        const today = new Date();
        const daysDifference = differenceInCalendarDays(today, userStreak.lastAccess);


        let newStreak = userStreak.currentStreak;

        if (daysDifference === 1) {
            // Incrementa o streak se o acesso for consecutivo
            newStreak += 1;
        } else if (daysDifference > 1) {
            // Reseta o streak se o usuário perdeu algum dia
            newStreak = 1;
        }

        const updatedStreak = await prismaClient.userStreak.update({
            where: { id: userStreak.id },
            data: {
              currentStreak: newStreak,
              maxStreak: Math.max(newStreak, userStreak.maxStreak),
              lastAccess: today,
            },
          });
          console.log("Streak atualizada")
        return updatedStreak
    }
}

export { UpdateUserStreakService }