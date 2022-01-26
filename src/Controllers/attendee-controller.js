import { Attendee, Employees, Card } from "../db/models";

class AttendeeController {
  static async createAttendee(req, res) {
    try {
      const { cardId } = req.query;
      Card.findOne({
        where: { cardId },
      }).then((readCard) => {
        if (readCard) {
          Employees.findOne({
            where: {
              cardId,
            },
          }).then((readEmployee) => {
            if (readEmployee) {
              const selectedEmployee = {
                cardId: readEmployee.cardId,
                employeeId: readEmployee.employeeId,
                name: readEmployee.firstName,
              };
              Attendee.create(selectedEmployee);
              return res.status(200).json({
                status: 200,
                message: "You successfully attended",
                data: selectedEmployee,
              });
            } else {
              res.json({ error: "Access denied" });
            }
          });
        }
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message,
      });
    }
  }

  static async allAttendee(req, res) {
    try {
      const allAttendee = await Attendee.findAll({
        order: [["id", "DESC"]],
      });
      return res.status(200).json({
        status: 200,
        message: "Add attendee were retrieved successfully",
        data: allAttendee,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message,
      });
    }
  }
}

export default AttendeeController;
