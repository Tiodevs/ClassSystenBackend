import { Request, Response } from "express";
import { ListLessonService } from "../../services/lessons/ListLessonServices";


class ListLessonController {
    async handle(req: Request, res: Response){

        const listLessonsService = new ListLessonService()

        const lessons = await listLessonsService.execute()

        return res.json(lessons)
    }
}

export {ListLessonController}