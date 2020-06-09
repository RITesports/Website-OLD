import { Router } from 'express';

import teamsRoutes from './teams';

const router = Router();

router.use('/teams', teamsRoutes);

export default router;
