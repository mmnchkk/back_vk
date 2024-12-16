import { Injectable } from '@nestjs/common';
import { Emotion } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class EmotionsService {
  constructor(private prisma: PrismaService) {}

  async createEmotion(data: {
    mood: string;
    reason: string;
    notes: string;
    feelings: string;
    date: Date;
  }): Promise<Emotion> {
    return this.prisma.emotion.create({ data });
  }

  async getEmotions(): Promise<Emotion[]> {
    return this.prisma.emotion.findMany();
  }
  async deleteEmotion(id: number): Promise<void> {
    await this.prisma.emotion.delete({
      where: { id },
    });
  }
}
