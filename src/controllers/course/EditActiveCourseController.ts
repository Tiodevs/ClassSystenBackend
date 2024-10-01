import { Request, Response } from "express";
import { EditActiveCourseService } from "../../services/course/EditActiveCourseService";

export class EditActiveCourseController{
    async handle(req: Request, res: Response){
        
        const {course_id} = req.body

        const editActiveServices = new EditActiveCourseService()

        const editActive = await editActiveServices.execute({
            course_id
        })
        
        res.json(editActive)
    }
}