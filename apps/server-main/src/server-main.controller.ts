import { Controller, Get } from '@nestjs/common';
import { ServerMainService } from './server-main.service';

@Controller()
export class ServerMainController {
  constructor(private readonly serverMainService: ServerMainService) {}

  @Get()
  getHello(): string {
    return this.serverMainService.getHello();
  }
}
