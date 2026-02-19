import exprees from 'express';
import * as authController from '../controllers/auth.controllers.js';
import { asyncHandler } from '../utils/helpers.js';
import { authenticateUser } from '../middlewares/auth.middlewares.js';
import { loginValidator } from '../validators/auth.validators.js';
import { validateRequest } from '../middlewares/validator.middlewares.js';
import { registerValidator } from '../validators/auth.validators.js';

const router = exprees.Router();

router.post('/login', loginValidator(), validateRequest , asyncHandler(authController.login));
//موجه لتسجيل الدخول

router.post('/register',registerValidator(),validateRequest,asyncHandler(authController.register));
//موجه لتسجيل مستخدم جديد

router.get('/me',authenticateUser, asyncHandler(authController.getCurrentUser));
//موجه لجلب بيانات المستخدم الحالي
export default router;