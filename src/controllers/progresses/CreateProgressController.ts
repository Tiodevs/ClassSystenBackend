import { Request, Response } from "express"
import { CreateProgressService } from "../../services/progresses/CreateLessonService"


export class CreateProgressController {
    async handle(req: Request, res: Response) {

        const { completed, user_id, lesson_id } = req.body

        
        const createProgressService = new CreateProgressService()

        const progress = await createProgressService.execute({
            completed, 
            user_id, 
            lesson_id
        })
        
        return res.json(progress)
    }
  }