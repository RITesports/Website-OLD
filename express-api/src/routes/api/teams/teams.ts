import { Router } from 'express';

import * as TeamController from '../../../controllers/team';
import * as TeamAuth from '../../../middleware/auth/team';

const router = Router();

//-----------------------------------------------
// NON-VALIDATED ROUTES
//-----------------------------------------------

/* Read */
router.get('/', TeamController.getTeams);
router.get('/:identifierOrId', TeamController.getTeamByIdentifierOrId);

//-----------------------------------------------
// VALIDATED ROUTES
//-----------------------------------------------

/* Create */
router.post('/', TeamAuth.createTeam, TeamController.createTeam);

/* Update */
router.put('/:id', TeamAuth.updateTeam, TeamController.updateTeam);

/* Delete */
router.delete('/:id', TeamAuth.deleteTeam, TeamController.deleteTeam);

export default router;
