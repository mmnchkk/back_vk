import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { Emotion } from '@prisma/client';
import { EmotionsService } from './emotions.service';

@Controller('emotions')
export class EmotionsController {
  constructor(private readonly emotionsService: EmotionsService) {}

  @Post()
  async createEmotion(
    @Body()
    data: {
      mood: string;
      reason: string;
      notes: string;
      feelings: string;
      date: Date;
    },
  ): Promise<Emotion> {
    return this.emotionsService.createEmotion(data);
  }

  @Get()
  async getEmotions(): Promise<Emotion[]> {
    return this.emotionsService.getEmotions();
  }

  @Delete(':id')
  async deleteEmotion(@Param('id') id: string): Promise<{ message: string }> {
    const emotionId = Number(id); // Преобразуем строку в число

    if (isNaN(emotionId)) {
      throw new BadRequestException('Invalid ID'); // Проверка на валидность
    }

    await this.emotionsService.deleteEmotion(emotionId); // Используем числовой ID
    return { message: 'Emotion deleted successfully' };
  }
}
