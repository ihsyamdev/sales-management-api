import { Module } from '@nestjs/common'
import { AccountPrismaRepository } from 'src/infrastructure/repositories/account.prisma.repository'
import { PrismaService } from 'src/shared/prisma.service'
import { AccountController } from './account.controller'

@Module({
  providers: [
    PrismaService,
    {
      provide: 'AccountRepository',
      useClass: AccountPrismaRepository,
    },
  ],
  controllers: [AccountController],
})
export class AccountModule {}
