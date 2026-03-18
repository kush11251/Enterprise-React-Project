// src/services/api/v1/users/handlers.ts
import { UserService } from '../services/UserService';
const getUsers = async () => {
  const userService = new UserService();
  return userService.getUsers();
};
export { getUsers };