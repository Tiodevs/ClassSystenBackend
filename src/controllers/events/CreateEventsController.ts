import { Request, Response } from "express"
import { CreateEventService } from "../../services/events/CreateLessonService"

export class CreateEventController {
    async handle(req: Request, res: Response) {

        const { title, date, place, duration, userId } = req.body

        
        const createEventService = new CreateEventService()

        const events = await createEventService.execute({
            title, 
            date, 
            place, 
            duration, 
            userId
        })
        
        return res.json(events)
    }
  }