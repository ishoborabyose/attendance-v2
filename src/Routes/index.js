import { Router } from 'express';
import attendeeRoutes from './attendee-route';
import employeeRoutes from './employee-route'

const router = Router();

router.use('/api/v2/auth', attendeeRoutes);
router.use('/api/v2/auth', employeeRoutes);

export default router;

