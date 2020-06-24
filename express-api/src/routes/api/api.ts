import { Router } from 'express';

import matchesRoutes from './matches';
import teamsRoutes from './teams';

const router = Router();

router.use('/matches', matchesRoutes);
router.use('/teams', teamsRoutes);

export default router;
