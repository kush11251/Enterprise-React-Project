// src/adapters/interfaces/DatabaseAdapter.ts
interface DatabaseAdapter {
  query(sql: string): Promise<any>;
}
export { DatabaseAdapter };