import { Module } from '@nestjs/common';
import { ServerMainController } from './server-main.controller';
import { ServerMainService } from './server-main.service';

@Module({
  imports: [],
  controllers: [ServerMainController],
  providers: [ServerMainService],
})
export class ServerMainModule {}
