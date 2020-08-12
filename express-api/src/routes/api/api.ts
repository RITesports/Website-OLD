import { Router } from 'express';

import profilesRoutes from './profiles';
import teamsRoutes from './teams';

const router = Router();

router.use('/profiles', profilesRoutes);
router.use('/teams', teamsRoutes);

export default router;
