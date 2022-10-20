import { Controller, Get } from '@nestjs/common'

@Controller()
export class AccountController {
  @Get('/account')
  getHello(): string {
    return 'hello'
  }
}
