import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import ShowProfileService from './ShowProfileService';

let fakeUsersRepository: FakeUsersRepository;
let showProfileService: ShowProfileService;

describe('ShowProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    showProfileService = new ShowProfileService(fakeUsersRepository);
  });

  it('should to be able show profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'teste',
      email: 'test@fake.com',
      password: '123456',
    });
    const profile = await showProfileService.execute({ user_id: user.id });
    expect(profile.id).toBe(user.id);
    expect(profile.name).toBe('teste');
    expect(profile.email).toBe('test@fake.com');
  });

  it('should not to be able show profile from when not-existing user', async () => {
    await expect(
      showProfileService.execute({ user_id: 'non-existing-user-id' })
    ).rejects.toBeInstanceOf(AppError);
  });
});
