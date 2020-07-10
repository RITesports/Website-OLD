import { Router } from 'express';

import * as ProfileController from '../../../controllers/profile';
import * as ProfileAuth from '../../../middleware/auth/profile';

const router = Router();

//-----------------------------------------------
// NON-VALIDATED ROUTES
//-----------------------------------------------

/* Read */
router.get('/:id', ProfileController.getProfileById);

//-----------------------------------------------
// VALIDATED ROUTES
//-----------------------------------------------

/* Update */
router.put('/:id', ProfileAuth.updateProfile, ProfileController.updateProfile);

export default router;
