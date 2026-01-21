import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

// Validation rules for creating a post
export const validatePost = [
    body("title")
        .trim()
        .notEmpty()
        .withMessage("Title is required")
        .isLength({ max: 40 })
        .withMessage("Title must be under 40 characters")
        .matches(/^[A-Za-z\s]+$/)
        .withMessage("Title must contain only letters and spaces"),
];

// Middleware to handle validation errors
export const handleValidationErrors = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({
            error: "Validation failed",
            errors: errors.array(),
        });
        return;
    }
    next();
};
