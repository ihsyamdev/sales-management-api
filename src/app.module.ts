import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AccountController } from './application/account.controller'
import { AppService } from './app.service'

@Module({
  imports: [],
  controllers: [AppController, AccountController],
  providers: [AppService],
})
export class AppModule {}
