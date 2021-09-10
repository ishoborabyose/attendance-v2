import { Router } from 'express';
import attendeeRoutes from './attendee-route';

const router = Router();

router.use('/api/v2/auth', attendeeRoutes);

export default router;

