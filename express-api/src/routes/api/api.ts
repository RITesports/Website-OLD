import { Router } from 'express';

import teamsRoutes from './teams';

const router = Router();

router.use('/teams', teamsRoutes);

router.get('/', (req, res) => res.status(200).json({
  status: 200,
  message: 'API Routes',
}));

export default router;
