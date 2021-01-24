import userRepository from './user.repository';
import { User } from './user.models';

async function getUser(id) {
  const user = await userRepository.get(id);
  if (!user) {
    return new Error('failed to fetch the user');
  }
  return new User(user);
}

export { getUser };
