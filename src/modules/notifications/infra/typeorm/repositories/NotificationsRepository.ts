import { getMongoRepository, MongoRepository, Raw } from 'typeorm';

import ICreateNotificationDTO from '@modules/notifications/dtos/ICreateNotificationDTO';
import IFindallNotificaionsDTO from '@modules/notifications/dtos/IFindAllNotificationsDTO';
import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';

import Notification from '../schemas/Notification';

class NotificationsRepository implements INotificationsRepository {
  private ormRepository: MongoRepository<Notification>;

  constructor() {
    this.ormRepository = getMongoRepository(Notification, 'mongo');
  }

  public async findAllNotifications({
    recipient_id,
  }: IFindallNotificaionsDTO): Promise<Notification[]> {
    const notifications = this.ormRepository.find({
      where: { recipient_id },
    });
    return notifications;
  }

  public async create({
    content,
    recipient_id,
    read,
  }: ICreateNotificationDTO): Promise<Notification> {
    const notification = this.ormRepository.create({
      content,
      recipient_id,
      read,
    });

    await this.ormRepository.save(notification);

    return notification;
  }
}

export default NotificationsRepository;
