import { body } from "express-validator";

export function loginValidator(){
    return [
        body('email').notEmpty().withMessage('Email is required'),
        body('email').isEmail().withMessage('Invalid email format'),
        body('password').notEmpty().withMessage('Password is required')
    ]
};
export function registerValidator(){
    return [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').notEmpty().withMessage('Email is required'),
        body('email').isEmail().withMessage('Invalid email format'),
        body('password').notEmpty().withMessage('Password is required')
    ]
}