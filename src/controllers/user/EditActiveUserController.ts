import { Request, Response } from "express";
import { EditActiveUserService } from "../../services/user/EditActiveUserService";

export class EditActiveUserController{
    async handle(req: Request, res: Response){
        
        const {user_id} = req.body

        const editActiveServices = new EditActiveUserService()

        const editActive = await editActiveServices.execute({
            user_id
        })
        
        res.json(editActive)
    }
}