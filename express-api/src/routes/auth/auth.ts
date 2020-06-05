import { Router } from 'express';

import googleRoutes from './google';

const router = Router();

router.use('/google', googleRoutes);

router.get('/', (req, res) => res.status(200).json({
  status: 200,
  message: 'Auth Routes',
}));

export default router;
