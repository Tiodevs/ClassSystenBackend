import { Request, Response } from "express";
import { ListCourseService } from "../../services/course/ListCourseServices";


class ListCourseController {
    async handle(req: Request, res: Response){

        const listCoursesService = new ListCourseService()

        const courses = await listCoursesService.execute()

        return res.json(courses)
    }
}

export {ListCourseController}