import { Request, Response } from "express";
import { EditActivePogressService } from "../../services/progresses/EditActiveProgressService";


export class EditActiveProgressController{
    async handle(req: Request, res: Response){
        
        const {lesson_id} = req.body

        const editActiveServices = new EditActivePogressService()

        const editActive = await editActiveServices.execute({
            lesson_id
        })
        
        res.json(editActive)
    }
}