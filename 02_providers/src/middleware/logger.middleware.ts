import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export function LoggerMiddleware(
    req:Request,
    res:Response,
    next:NextFunction,
){
      console.log('Middleware hit');
    console.log(`[${req.method} ${req.originalUrl}]`);
    next();
}

// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     console.log('Request received:', req.method, req.url);

//     next();
//   }
// }
