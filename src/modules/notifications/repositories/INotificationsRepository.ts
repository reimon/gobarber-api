import ICreateNotificationDTO from '../dtos/ICreateNotificationDTO';
import IFindAllNotificationsDTO from '../dtos/IFindAllNotificationsDTO';
import Notification from '../infra/typeorm/schemas/Notification';

export default interface INotificationsRepository {
  create(data: ICreateNotificationDTO): Promise<Notification>;
  findAllNotifications(data: IFindAllNotificationsDTO): Promise<Notification[]>;
}
