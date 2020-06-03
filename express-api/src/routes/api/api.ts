import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.status(200).json({
  status: 200,
  message: 'API Routes',
}));

export default router;
