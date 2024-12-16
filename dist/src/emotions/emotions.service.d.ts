import { Emotion } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
export declare class EmotionsService {
    private prisma;
    constructor(prisma: PrismaService);
    createEmotion(data: {
        mood: string;
        reason: string;
        notes: string;
        feelings: string;
        date: Date;
    }): Promise<Emotion>;
    getEmotions(): Promise<Emotion[]>;
    deleteEmotion(id: number): Promise<void>;
}
