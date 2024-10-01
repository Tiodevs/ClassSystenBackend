import { Response, Request } from "express";
import { ListbyidLessonServices } from "../../services/lessons/ListbyidLessonServices";

export class ListbyidLessonController{
    async handle(req: Request, res: Response){
        
        const {course_id} = req.body

        const listLessonbyidService = new ListbyidLessonServices()

        const listLessonsbyid = await listLessonbyidService.execute({
            course_id
        })

        return res.json(listLessonsbyid)
    }
} 