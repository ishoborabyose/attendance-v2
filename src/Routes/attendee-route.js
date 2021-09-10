import express from 'express';
import attendeeController from '../Controllers/attendee-controller';
import attendeeValidation from '../Validations/attendee-validate';

const router = express.Router();

router.post('/add',attendeeValidation, attendeeController.createAttendee );
router.get('/get-all', attendeeController.allAttendee)

export default router;