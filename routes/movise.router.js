import express from 'express';
import { asyncHandler } from '../utils/helpers.js';
import * as movieController from '../controllers/movise.controllers.js';
import { authenticateAdmin } from '../middlewares/admin.middlewares.js';
import { authenticateUser } from '../middlewares/auth.middlewares.js';
import { createMovieValidator, updateMovieValidator } from '../validators/movie.validators.js';
import { validateRequest } from '../middlewares/validator.middlewares.js';
//موجه التعامل مع الافلام
const router = express.Router();
//جلب كل الافلام
router.get('/', asyncHandler(movieController.getMovies));
//جلب فلم معين
router.get('/:id', asyncHandler(movieController.getMovie));
//اضافة فلم جديد
router.post('/',createMovieValidator(),validateRequest,asyncHandler(authenticateUser),asyncHandler(authenticateAdmin) ,
    asyncHandler(movieController.createMovie));
//تعديل فلم معين
router.put('/:id',updateMovieValidator(),validateRequest,asyncHandler(authenticateUser),
    asyncHandler(authenticateAdmin),asyncHandler(movieController.updateMovie));
//حذف فلم معين
router.delete('/:id',asyncHandler(authenticateUser),
    asyncHandler(authenticateAdmin),
    asyncHandler(movieController.deleteMovie));

export default router;