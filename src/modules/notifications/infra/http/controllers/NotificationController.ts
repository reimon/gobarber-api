import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListNotificationsService from '@modules/notifications/services/ListNotificationsService';

export default class NotificationController {
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listNotification = container.resolve(ListNotificationsService);

    const notifications = await listNotification.execute({
      user_id,
    });

    return response.json(notifications);
  }
}
