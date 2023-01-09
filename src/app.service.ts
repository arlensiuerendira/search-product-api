import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getApiInstructions(): string {
    return 'Check out the documentation to further know how to use this API, have fun !';
  }
}
