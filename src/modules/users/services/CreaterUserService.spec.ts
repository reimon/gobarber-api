import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserServices';

describe('CreateUser', () => {
  const fakeUsersRepository = new FakeUsersRepository();
  const createUser = new CreateUserService(fakeUsersRepository);
  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      name: 'Reimon',
      email: 'reimonf@gmail.com',
      password: '123456',
    });
    expect(user).toHaveProperty('id');
  });

  it('should be able to create a new user with same email from another', async () => {
    await createUser.execute({
      name: 'Reimon',
      email: 'reimonf@gmail.com',
      password: '123456',
    });

    expect(
      createUser.execute({
        name: 'Reimon',
        email: 'reimonf@gmail.com',
        password: '123456',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
