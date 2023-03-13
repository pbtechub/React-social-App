import express from 'express';
import  { getLikes }  from '../controllers/like.js';

const router = express.Router();

router.get('/likes', getLikes)

export default router;