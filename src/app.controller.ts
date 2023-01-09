import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Information')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getApiInstructions(): string {
    return this.appService.getApiInstructions();
  }
}
