import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from ISMS2020!';
  }
  getHello2(): {} {
    return {message: 'Hello World!', title: 'My Greeting App'};
    }
}
