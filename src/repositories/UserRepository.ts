// src/repositories/UserRepository.ts
import { db } from '../../utils/db';
/**
 * User Repository
 */
class UserRepository {
  /**
   * Get users
   * @returns {Promise<any>}
   */
  async getUsers(): Promise<any> {
    return db.query('SELECT * FROM users');
  }
}
export { UserRepository };