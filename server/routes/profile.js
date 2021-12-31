import express from 'express';
import auth from '../middleware/profile.js';

import { updateProfile,getProfile} from '../controllers/profile.js';
const router = express.Router();


router.patch('/:id',auth,updateProfile);
router.get('/:email',getProfile);

export default router;

