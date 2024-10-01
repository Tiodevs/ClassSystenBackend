import { Request, Response } from "express"
import { CreateCourseService } from "../../services/course/CreateCourseService"


export class CreateCourseController {
    async handle(req: Request, res: Response) {

        const { name, description } = req.body

        
        const createCourseService = new CreateCourseService()

        const course = await createCourseService.execute({
            name,
            description
        })
        
        return res.json(course)
    }
  }