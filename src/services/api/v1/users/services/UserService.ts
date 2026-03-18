// src/services/api/v1/users/services/UserService.ts
import { UserRepository } from '../../repositories/UserRepository';
/**
 * User Service
 */
class UserService {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }
  /**
   * Get users
   * @returns {Promise<any>}
   */
  async getUsers(): Promise<any> {
    return this.userRepository.getUsers();
  }
}
export { UserService };