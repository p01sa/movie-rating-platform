import express from "express";
import * as wathclistController from "../controllers/watchlist.controllers.js";
import { asyncHandler } from "../utils/helpers.js";
import { authenticateUser } from '../middlewares/auth.middlewares.js';

const router = express.Router();

router.post('/:movieId', authenticateUser, asyncHandler(wathclistController.addWatchlist));
router.get('/', authenticateUser, asyncHandler(wathclistController.getWatchlist));
router.delete('/:movieId', authenticateUser, asyncHandler(wathclistController.removeFromWatchlist));

export default router;