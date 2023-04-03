import { Injectable, Logger } from '@nestjs/common';
import { TELEGRAM_CHAT_ID } from './telegram.constants';
import { CaptureService } from './capture.service';
import { ConfigService } from '@nestjs/config';
// import * as TelegramBot from 'node-telegram-bot-api'; // works after installing types
const TelegramBot = require('node-telegram-bot-api');

@Injectable()
export class TelegramService {
  private readonly bot: any;
  // private readonly bot:TelegramBot // works after installing types
  private logger = new Logger(TelegramService.name);
  private TELEGRAM_TOKEN;
  private TELEGRAM_CHAT_ID;

  constructor(
    private readonly captureService: CaptureService,
    private readonly config: ConfigService,
  ) {
    this.TELEGRAM_TOKEN = config.get<string>('TELEGRAM_TOKEN');
    this.TELEGRAM_CHAT_ID = config.get<string>('TELEGRAM_CHAT_ID');

    this.bot = new TelegramBot(this.TELEGRAM_TOKEN, { polling: true });

    this.bot.on('message', this.onReceiveMessage);

    // this.sendMessageToUser(
    //   this.TELEGRAM_CHAT_ID,
    //   `Server started at ${new Date()}`,
    // );
  }

  onReceiveMessage = async (msg: any) => {
    // this.logger.debug(msg);
    if (msg.text === this.config.get<string>('COMMAND_1')) {
      try {
        this.bot.sendMessage(TELEGRAM_CHAT_ID, 'Mohon Tunggu...');
        const screenshot = await this.captureService.capture(
          this.config.get<string>('URL_1'),
        );
        const caption = this.config.get<string>('CAPTION_1');
        await this.bot.sendPhoto(TELEGRAM_CHAT_ID, screenshot, { caption });
      } catch (error) {
        this.bot.sendMessage(
          TELEGRAM_CHAT_ID,
          'Sabar boss, gunakan perintah berurutan',
        );
      }
    }

    if (msg.text === this.config.get<string>('COMMAND_2')) {
      try {
        this.bot.sendMessage(TELEGRAM_CHAT_ID, 'Mohon Tunggu...');
        const screenshot = await this.captureService.capture(
          this.config.get<string>('URL_2'),
        );
        const caption = this.config.get<string>('CAPTION_2');
        await this.bot.sendPhoto(TELEGRAM_CHAT_ID, screenshot, { caption });
      } catch (error) {
        this.bot.sendMessage(
          TELEGRAM_CHAT_ID,
          'Sabar boss, gunakan perintah berurutan',
        );
      }
    }

    if (msg.text === this.config.get<string>('COMMAND_3')) {
      try {
        this.bot.sendMessage(TELEGRAM_CHAT_ID, 'Mohon Tunggu...');
        const screenshot = await this.captureService.capture(
          this.config.get<string>('URL_3'),
        );
        const caption = this.config.get<string>('CAPTION_3');
        await this.bot.sendPhoto(TELEGRAM_CHAT_ID, screenshot, { caption });
      } catch (error) {
        this.bot.sendMessage(
          TELEGRAM_CHAT_ID,
          'Sabar boss, gunakan perintah berurutan',
        );
      }
    }

    if (msg.text === this.config.get<string>('COMMAND_4')) {
      try {
        this.bot.sendMessage(TELEGRAM_CHAT_ID, 'Mohon Tunggu...');
        const screenshot = await this.captureService.capture(
          this.config.get<string>('URL_4'),
        );
        const caption = this.config.get<string>('CAPTION_4');
        await this.bot.sendPhoto(TELEGRAM_CHAT_ID, screenshot, { caption });
      } catch (error) {
        this.bot.sendMessage(
          TELEGRAM_CHAT_ID,
          'Sabar boss, gunakan perintah berurutan',
        );
      }
    }

    if (msg.text === this.config.get<string>('COMMAND_5')) {
      try {
        this.bot.sendMessage(TELEGRAM_CHAT_ID, 'Mohon Tunggu...');
        const screenshot = await this.captureService.capture(
          this.config.get<string>('URL_5'),
        );
        const caption = this.config.get<string>('CAPTION_5');
        await this.bot.sendPhoto(TELEGRAM_CHAT_ID, screenshot, { caption });
      } catch (error) {
        this.bot.sendMessage(
          TELEGRAM_CHAT_ID,
          'Sabar boss, gunakan perintah berurutan',
        );
      }
    }
  };

  sendMessageToUser = (chatId: string, message: string) => {
    this.logger.debug('send');
    this.bot.sendMessage(chatId, message);
  };
}
