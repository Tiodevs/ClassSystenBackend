import { Request, Response } from "express";
import { DeleteLessonService } from "../../services/lessons/DeleteLessonsService";

class DeleteLessonController {
  async handle(req: Request, res: Response) {
    const lesson_id = req.query.lesson_id as string

    console.log(lesson_id)

    const deleteLessonService = new DeleteLessonService()

    const lesson = await deleteLessonService.execute({ lesson_id })

    return res.json(lesson)
  }
}

export { DeleteLessonController }