import { Request, Response } from 'express'
import { CreateUsercoursesService } from '../../services/userCourses/CreateUsercoursesService'

export class CreateUsercoursesController {
    async handle(req: Request, res: Response){
        const {user_id, course_id} = req.body

        const usercourseServices = new CreateUsercoursesService()

        const userCourse = await usercourseServices.execute({
            user_id, 
            course_id
        })

        res.json(userCourse)

    }
}