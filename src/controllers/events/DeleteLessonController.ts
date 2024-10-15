import { Request, Response } from "express";
import { DeleteEventsService } from "../../services/events/DeleteEventService";

class DeleteEventController {
  async handle(req: Request, res: Response) {
    const event_id = req.query.event_id as string

    console.log(event_id)

    const deleteEventService = new DeleteEventsService()

    const event = await deleteEventService.execute({ event_id })

    return res.json(event)
  }
}

export { DeleteEventController }