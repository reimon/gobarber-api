/* eslint-disable camelcase */
import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import NotificationController from '../controllers/NotificationController';

const notificationsRouter = Router();
const notificationController = new NotificationController();

notificationsRouter.use(ensureAuthenticated);

notificationsRouter.get('/', notificationController.index);

export default notificationsRouter;
