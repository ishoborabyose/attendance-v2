import express from 'express';
import EmployeeController from '../Controllers/employee-controller';
import employeeValidation from '../Validations/employee-validate';

const router = express.Router();

router.post('/add/employee',employeeValidation, EmployeeController.createEmployee );
router.get('/get-all/employee', EmployeeController.allEmployee)

export default router;