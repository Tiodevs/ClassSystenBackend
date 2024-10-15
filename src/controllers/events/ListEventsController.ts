import { Request, Response } from "express";
import { ListEventsService } from "../../services/events/ListEventsServisses";


class ListEventController {
    async handle(req: Request, res: Response){

        const { userId } = req.body
        const listEventsService = new ListEventsService()

        const events = await listEventsService.execute(userId)

        return res.json(events)
    }
}

export {ListEventController}