import { Injectable } from '@nestjs/common';

@Injectable()
export class ServerMainService {
  getHello(): string {
    return 'Hello World!';
  }
}
