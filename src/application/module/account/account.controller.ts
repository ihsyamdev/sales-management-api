import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common'
import { Account } from 'src/domain/account/account.entity'
import { AccountRepository } from 'src/domain/account/account.repository'

export class CreateAccountDto {
  name: string
  billingPostalCode: string
  billingState: string
  billingCity: string
  billingStreet: string
  shippingPostalCode: string
  shippingState: string
  shippingCity: string
  shippingStreet: string
  phone: string
  website: string
  corporateNumber: string
  representativeName: string
  representativeTitle: string
}

export class UpdateAccountDto {
  id: string
  name: string
  billingPostalCode: string
  billingState: string
  billingCity: string
  billingStreet: string
  shippingPostalCode: string
  shippingState: string
  shippingCity: string
  shippingStreet: string
  phone: string
  website: string
  corporateNumber: string
  representativeName: string
  representativeTitle: string
}

@Controller('account')
export class AccountController {
  constructor(
    @Inject('AccountRepository')
    private readonly accountRepository: AccountRepository,
  ) {}

  @Get(':id')
  async getAccount(@Param() param) {
    const account = await this.accountRepository.findById(param.id)

    return {
      statusCode: HttpStatus.OK,
      item: account,
    }
  }

  @Get()
  async getAccounts() {
    const accounts = await this.accountRepository.list()

    return {
      statusCode: HttpStatus.OK,
      item: accounts,
    }
  }

  @Post()
  async create(@Body() createAccountDto: CreateAccountDto) {
    const account = Account.create({
      name: createAccountDto.name,
      billingPostalCode: createAccountDto.billingPostalCode,
      billingState: createAccountDto.billingState,
      billingCity: createAccountDto.billingCity,
      billingStreet: createAccountDto.billingStreet,
      shippingPostalCode: createAccountDto.shippingPostalCode,
      shippingState: createAccountDto.shippingState,
      shippingCity: createAccountDto.shippingCity,
      shippingStreet: createAccountDto.shippingStreet,
      phone: createAccountDto.phone,
      website: createAccountDto.website,
      corporateNumber: createAccountDto.corporateNumber,
      representativeName: createAccountDto.representativeName,
      representativeTitle: createAccountDto.representativeTitle,
    })

    const insertedAccount = await this.accountRepository.save(account)

    return {
      statusCode: HttpStatus.CREATED,
      item: insertedAccount,
    }
  }

  // @Put(':id')
  // async update(@Param() param, @Body() updateAccountDto: UpdateAccountDto) {
  //   const account = await this.accountRepository.findById(param.id)
  //   const updatedAccount = Account.reconstruct(updateAccountDto)
  //   await this.accountRepository.save()

  //   return {
  //     statusCode: HttpStatus.OK,
  //     item: updatedAccount,
  //   }
  // }
}
