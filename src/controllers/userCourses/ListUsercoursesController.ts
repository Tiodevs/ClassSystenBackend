import { Response, Request } from "express";
import { ListaUsercoursesService } from "../../services/userCourses/ListUsercursesServices";

export class ListUsercoursesController{
    async handle(req: Request, res: Response){
        
        const listUsercoursesService = new ListaUsercoursesService()

        const listUsercourses = await listUsercoursesService.execute()

        return res.json(listUsercourses)

    }
} 