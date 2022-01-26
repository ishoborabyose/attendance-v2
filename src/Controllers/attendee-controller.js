import { Attendee, Employees, Card, sequelize } from "../db/models";
import { Op } from "sequelize";

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
      await Attendee.findAll({
        group: ["cardId"],
        attributes: [
          [
            sequelize.Sequelize.fn("MAX", sequelize.Sequelize.col("createdAt")),
            "createdAt",
          ],
        ],
      }).then((read) => {
        if (read) {
          const createdAtData = read.map((item) => {
            return item.get("createdAt");
          });
          Attendee.findAll({
            where: {
              createdAt: createdAtData,
            },
          }).then((read) => {
            if (read) {
              const data = read.map((item) => {
                return {
                  id: item.id,
                  cardId: item.cardId,
                  employeeId: item.employeeId,
                  name: item.name,
                  createdAt: item.createdAt,
                };
              });

              if (!data) {
                return res.status(404).json({
                  status: 404,
                  error: "Data not found",
                });
              }

              return res.status(200).json({
                status: 200,
                message: "Successfully retrieve last entry for attendee",

                data: data,
              });
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
}

export default AttendeeController;
