import { Body, Controller, Post } from '@nestjs/common';
import { ISendMenssageToQueue, ISendMenssageToExchange } from './app.interface';
import { AppService } from './app.service';

@Controller('server')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('start')
  async start() {
    return this.appService.start();
  }

  @Post('sendMessage/queue')
  async sendMenssageToQueue(@Body() data: ISendMenssageToQueue) {
    await this.appService.start();
    return this.appService.sendMenssageToQueue(data);
  }

  @Post('sendMessage/exchange')
  async sendMessageToExchange(@Body() data: ISendMenssageToExchange) {
    return this.appService.sendMessageToExchange(data);
  }

}
