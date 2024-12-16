import { OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
export declare class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    user: any;
    result: any;
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
}
