import {
    Employees
} from '../db/models';


class EmployeeController {

    static async createEmployee(req, res) {

        try {
            const {
                employeeId,
                cardId,
                firstName,
                lastName,
                gender,
                department,
                position,
                PhoneNumber,
                email,
              
            } = req.body;

            const employeeExist = await Employees.findOne({
                where: { employeeId }
            })

            if(employeeExist){
                return res.status(403).json({
                    status: 403,
                    error: 'This employee arleady exist'
                })
            }

            const newEmployee = await Employees.create({
                employeeId,
                cardId,
                firstName,
                lastName,
                gender,
                department,
                position,
                PhoneNumber,
                email,
            });
            
            return res.status(201).json({
                status: 201,
                message: 'A new employee have been added',
                data: newEmployee
            });
        } catch (error) {
            return res.status(500).json({
                status: 500,
                error: error.message,

            });
        }

    }

    static async allEmployee(req, res) {
        try {
            const allEmployee = await Employees.findAll();
            return res.status(200).json({
                status: 200,
                message: 'Add employees were retrieved successfully',
                data: allEmployee
            });
        } catch (error) {
            return res.status(500).json({
                status: 500,
                error: error.message
            });
        }
    }

}

export default EmployeeController;