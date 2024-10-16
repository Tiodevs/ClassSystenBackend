import { Request, Response } from 'express'
import { CreateUserStreakService } from '../../services/userStreak/CreateUserStreakervice'

export class CreateUserStreakController {
    async handle(req: Request, res: Response){
        const {user_id} = req.body

        console.log(user_id)

        const userStreakServices = new CreateUserStreakService()

        const userStreak = await userStreakServices.execute({
            user_id: user_id
        }
        )

        res.json(userStreak)

    }
}