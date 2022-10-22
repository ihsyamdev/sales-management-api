import { Controller, Get, Inject, Param, Post } from '@nestjs/common'
import { Account } from 'src/domain/account/account.entity'
import { AccountRepository } from 'src/domain/account/account.repository'

@Controller('account')
export class AccountController {
  constructor(
    @Inject('AccountRepository')
    private readonly accountRepository: AccountRepository,
  ) {}

  @Get(':id')
  async get(@Param() param): Promise<Account> {
    return this.accountRepository.findById(param.id)
  }
}
