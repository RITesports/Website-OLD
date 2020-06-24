import { Router } from 'express';

import matchesRoutes from './matches';
import profilesRoutes from './profiles';
import teamsRoutes from './teams';

const router = Router();

router.use('/matches', matchesRoutes);
router.use('/profiles', profilesRoutes);
router.use('/teams', teamsRoutes);

export default router;
