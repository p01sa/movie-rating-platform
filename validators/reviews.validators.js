import { body } from "express-validator";

export function createReviewValidator(){
    return [
        body('movieId').notEmpty().withMessage('Movie ID is required'),
        body('reviewText').notEmpty().withMessage('Review text is required'),
        body('rating').notEmpty().withMessage('Rating is required')
    ]
}