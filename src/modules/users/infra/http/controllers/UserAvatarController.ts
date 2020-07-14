import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateUserAvatar from '@modules/users/services/UpdateUserAvatarService';

export default class UsersAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const upadtedateUserAvatar = container.resolve(UpdateUserAvatar);

      const user = await upadtedateUserAvatar.execute({
        user_id: request.user.id,
        avatarFilename: request.file.filename,
      });

      delete user.password;

      return response.json(user);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
