import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { CaptureService } from './capture.service';

@Module({
  providers: [TelegramService, CaptureService],
})
export class TelegramModule {}
