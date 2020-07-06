import { Router } from 'express';

import teamsRoutes from './teams';
import profilesRoutes from './profiles';

const router = Router();

router.use('/teams', teamsRoutes);
router.use('/profiles', profilesRoutes);

export default router;
