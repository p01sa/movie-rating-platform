import express from 'express';
import * as reviewsController from '../controllers/review.controllers.js';
import { asyncHandler } from '../utils/helpers.js';
import { authenticateUser } from '../middlewares/auth.middlewares.js';
import { createReviewValidator } from '../validators/reviews.validators.js';
import { validateRequest } from '../middlewares/validator.middlewares.js';

const router = express.Router();

router.post('/:movieId', createReviewValidator(), validateRequest, asyncHandler(authenticateUser), asyncHandler(reviewsController.createReview));
router.get('/:movieId', asyncHandler(reviewsController.getReviewByMovieId))
export default router;
