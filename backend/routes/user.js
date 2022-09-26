import express from 'express'
import { home } from '../controllers/user';

export const router = express.Router();

router.get('/user', home)
