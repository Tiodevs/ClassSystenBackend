import { Response, Request } from "express";
import { ListabyidUsercoursesService } from "../../services/userCourses/ListbyidUsercursesServices";

export class ListbyidUsercoursesController{
    async handle(req: Request, res: Response){
        
        const {user_id} = req.body

        const listUsercoursesService = new ListabyidUsercoursesService()

        const listUsercourses = await listUsercoursesService.execute({
            user_id
        })

        return res.json(listUsercourses)
    }
} 