import { body } from "express-validator";

export function createMovieValidator(){
    return [
        body('name').notEmpty().withMessage('Name is required'),
        body('genre').notEmpty().withMessage('Genre is required'),
        body('releaseDate').notEmpty().withMessage('Release date is required')

    ] 
};
export function updateMovieValidator(){
    return [
        body('name').notEmpty().withMessage('Name cannot be empty'),
        body('genre').notEmpty().withMessage('Genre cannot be empty'),
        body('releaseDate').notEmpty().withMessage('Release date cannot be empty')
    ]
}