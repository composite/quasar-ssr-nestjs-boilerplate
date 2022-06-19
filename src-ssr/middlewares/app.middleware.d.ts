/// <reference types="express-serve-static-core" />
import { NestMiddleware } from '@nestjs/common';
export declare class AppMiddleware implements NestMiddleware {
    private expressInstance;
    constructor(expressInstance: Express.Application);
    use(req: any, res: any, next: () => void): Promise<import("@nestjs/common").INestApplication>;
}
