import { Request, Response } from 'express'
import { UpdateUserStreakService } from '../../services/userStreak/UpdateUserStreakervice'

export class UpdateUserStreakController {
    async handle(req: Request, res: Response){
        const {userId} = req.body

        const updateUserStreakService = new UpdateUserStreakService()

        const userStreak = await updateUserStreakService.execute({
            userId
        }
        )

        res.json(userStreak)

    }
}