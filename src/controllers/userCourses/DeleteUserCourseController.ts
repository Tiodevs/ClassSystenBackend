import { Request, Response } from "express";
import { DeleteUserCurseService } from "../../services/userCourses/DeleteUserCourseService";

class DeleteUserCourseController {
  async handle(req: Request, res: Response) {
    const usercurse_id = req.query.usercurse_id as string

    console.log(usercurse_id)

    const deleteUserCourseService = new DeleteUserCurseService()

    const userCurse = await deleteUserCourseService.execute({ usercurse_id })

    return res.json(userCurse)
  }
}

export { DeleteUserCourseController }