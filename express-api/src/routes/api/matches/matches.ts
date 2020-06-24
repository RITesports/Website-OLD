import { Router } from 'express';

import * as MatchController from '../../../controllers/match';
import * as MatchAuth from '../../../middleware/auth/match';

const router = Router();

//-----------------------------------------------
// NON-VALIDATED ROUTES
//-----------------------------------------------

/* Read */
router.get('/', MatchController.getMatches);
router.get('/:id', MatchController.getMatchById);

//-----------------------------------------------
// VALIDATED ROUTES
//-----------------------------------------------

/* Create */
router.post('/', MatchAuth.createMatch, MatchController.createMatch);

/* Update */
router.put('/:id', MatchAuth.updateMatch, MatchController.updateMatch);

/* Delete */
router.delete('/:id', MatchAuth.deleteMatch, MatchController.deleteMatch);

export default router;
