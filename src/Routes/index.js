import { Router } from 'express';
import attendeeRoutes from './attendee-route';
import employeeRoutes from './employee-route';
import cardRoutes from './card-route'; 

const router = Router();

router.use('/api/v2/auth', attendeeRoutes);
router.use('/api/v2/auth', employeeRoutes);
router.use('/api/v2/auth', cardRoutes);

export default router;

