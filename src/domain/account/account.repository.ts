import { Account } from './account.entity'

export interface AccountRepository {
  findById(accountId: string): Promise<Account | null>
  list(): Promise<Account[]>
  save(account: Account): Promise<void>
}
