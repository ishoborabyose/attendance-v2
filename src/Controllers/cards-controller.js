import { Card } from '../db/models';


class CardController{

    static async createCard(req, res){

        try {
            const { cardId } = req.body;

           const cardExist = await Card.findOne({
               where: { cardId }
           })

           if(cardExist){
               return res.status(403).json({
                status: 403,
                error: 'This card arleady exist'
               })
           }

            const newCard = await Card.create({
                cardId,
               
            });
            return res.status(201).json({
                status: 201,
                message: 'A new card have been added',
                data: newCard
            });
        } catch (error) {
            return res.status(500).json({
                status: 500,
                error: error.message
            });
        }

    }

    static async allCards(req, res){
        try {
            const allCards = await Card.findAll();
            return res.status(200).json({
                status: 200,
                message: 'Add cards were retrieved successfully',
                data: allCards
            });
        } catch (error) {
            return res.status(500).json({
                status:500,
                error: error.message
            });
        }
    }

}

export default CardController;