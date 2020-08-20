import { injectable, inject } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';

import Notification from '@modules/notifications/infra/typeorm/schemas/Notification';

interface IRequest {
  user_id: string;
}

@injectable()
class ListNotificationsService {
  constructor(
    @inject('NotificationsRepository')
    private notificationsRepository: INotificationsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider
  ) {}

  public async execute({ user_id }: IRequest): Promise<Notification[]> {
    const notifications = await this.notificationsRepository.findAllNotifications(
      {
        recipient_id: user_id,
      }
    );

    return notifications;
  }
}

export default ListNotificationsService;
