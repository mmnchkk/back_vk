"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmotionsController = void 0;
const common_1 = require("@nestjs/common");
const emotions_service_1 = require("./emotions.service");
let EmotionsController = class EmotionsController {
    constructor(emotionsService) {
        this.emotionsService = emotionsService;
    }
    async createEmotion(data) {
        return this.emotionsService.createEmotion(data);
    }
    async getEmotions() {
        return this.emotionsService.getEmotions();
    }
    async deleteEmotion(id) {
        const emotionId = Number(id);
        if (isNaN(emotionId)) {
            throw new common_1.BadRequestException('Invalid ID');
        }
        await this.emotionsService.deleteEmotion(emotionId);
        return { message: 'Emotion deleted successfully' };
    }
};
exports.EmotionsController = EmotionsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmotionsController.prototype, "createEmotion", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmotionsController.prototype, "getEmotions", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmotionsController.prototype, "deleteEmotion", null);
exports.EmotionsController = EmotionsController = __decorate([
    (0, common_1.Controller)('emotions'),
    __metadata("design:paramtypes", [emotions_service_1.EmotionsService])
], EmotionsController);
//# sourceMappingURL=emotions.controller.js.map