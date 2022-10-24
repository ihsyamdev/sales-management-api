import { Injectable } from '@nestjs/common'
import { Account } from 'src/domain/account/account.entity'
import { AccountRepository } from 'src/domain/account/account.repository'
import { PrismaService } from 'src/shared/prisma.service'

@Injectable()
export class AccountPrismaRepository implements AccountRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: string): Promise<Account | null> {
    return await this.prisma.account.findFirst({
      where: {
        id: id,
      },
    })
  }

  async list(): Promise<Account[]> {
    return await this.prisma.account.findMany({
      orderBy: [
        {
          id: 'asc',
        },
      ],
    })
  }

  async save(account: Account): Promise<void> {
    await this.prisma.account.upsert({
      where: { id: account.id },
      create: account,
      update: account,
    })
  }
}
