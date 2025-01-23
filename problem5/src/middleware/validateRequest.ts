import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

export default function validateRequest(schema: ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction): void => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            res.status(400).json({ errors: error.details });
        } else {
            next();
        }
    };
}