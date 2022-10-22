import { Account } from './account.entity'

export interface AccountRepository {
  findById(accountId: string): Promise<Account | null>
  // save(account: Account): Promise<void>
}
