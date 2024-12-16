import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmotionsModule } from './emotions/emotions.module';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [EmotionsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
