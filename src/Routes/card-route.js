import express from 'express';
import CardController from '../Controllers/cards-controller';
import cardValidation from '../Validations/card-validate';

const router = express.Router();

router.post('/add/card',cardValidation, CardController.createCard );
router.get('/get-all/card', CardController.allCards)

export default router;