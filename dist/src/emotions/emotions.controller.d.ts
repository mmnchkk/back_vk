import { Emotion } from '@prisma/client';
import { EmotionsService } from './emotions.service';
export declare class EmotionsController {
    private readonly emotionsService;
    constructor(emotionsService: EmotionsService);
    createEmotion(data: {
        mood: string;
        reason: string;
        notes: string;
        feelings: string;
        date: Date;
    }): Promise<Emotion>;
    getEmotions(): Promise<Emotion[]>;
    deleteEmotion(id: string): Promise<{
        message: string;
    }>;
}
