import { Request, Response } from "express"
import { CreateLessonService } from "../../services/lessons/CreateLessonService"


export class CreateLessonController {
    async handle(req: Request, res: Response) {

        const { title, course_id } = req.body

        
        const createLessonService = new CreateLessonService()

        const lesson = await createLessonService.execute({
            title: title,
            course_id: course_id
        })
        
        return res.json(lesson)
    }
  }