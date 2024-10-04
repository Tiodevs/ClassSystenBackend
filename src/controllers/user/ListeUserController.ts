import { Request, Response } from "express";
import { ListUserService } from "../../services/user/ListUserService";

export class ListUserContoller{
    async handle(req: Request, res: Response){

        const listUserServices = new ListUserService()

        const listUser = await listUserServices.execute()
        
        res.json(listUser)
    }
}