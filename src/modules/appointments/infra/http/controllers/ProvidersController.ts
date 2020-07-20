import { Request, Response } from 'express';
import { container } from 'tsyringe';

import listProvidersService from '@modules/appointments/services/ListProvidersService';

export default class ProvidersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listProviders = container.resolve(listProvidersService);

    const providers = await listProviders.execute({
      user_id,
    });

    return response.json(providers);
  }
}
