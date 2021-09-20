import { Attendee } from '../db/models';


class AttendeeController{

    static async createAttendee(req, res){

        try {
            const { cardId, name} = req.query;
    
            const newAttendee = {
                cardId,
                name
            };

            const attendees = await Attendee.create(newAttendee)
            return res.status(201).json({
                status: 201,
                message: 'A new attendee have been added',
                data: attendees
            });
        } catch (error) {
            return res.status(500).json({
                status: 500,
                error: error.message
            });
        }

    }

    static async allAttendee(req, res){
        try {
            const allAttendee = await Attendee.findAll();
            return res.status(200).json({
                status: 200,
                message: 'Add attendee were retrieved successfully',
                data: allAttendee
            });
        } catch (error) {
            return res.status(500).json({
                status:500,
                error: error.message
            });
        }
    }

}

export default AttendeeController;