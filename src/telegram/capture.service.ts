import { Injectable } from '@nestjs/common';

import * as puppeteer from 'puppeteer';

@Injectable()
export class CaptureService {
  async capture(url: string): Promise<Buffer> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.setViewport({ width: 0, height: 0 });
    const screenshot = await page.screenshot();
    await browser.close();
    return screenshot;
  }
}
