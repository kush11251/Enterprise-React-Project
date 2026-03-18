// src/adapters/postgres/PostgresAdapter.ts
import { Pool } from 'pg';
import { DatabaseAdapter } from '../interfaces/DatabaseAdapter';
/**
 * Postgres Adapter
 */
class PostgresAdapter implements DatabaseAdapter {
  private pool: Pool;
  constructor() {
    this.pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      database: 'mydb',
      password: 'password',
      port: 5432,
    });
  }
  /**
   * Query
   * @param {string} sql
   * @returns {Promise<any>}
   */
  async query(sql: string): Promise<any> {
    return this.pool.query(sql);
  }
}
export { PostgresAdapter };