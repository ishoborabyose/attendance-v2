import Joi from 'joi';

const attendeeValidation = (req, res, next) =>{
    const dataSchema = Joi.object({
        cardId: Joi.string().min(5).required(),
        name: Joi.string().min(3).required(),
       
    });

    const schema = dataSchema.validate(req.body);
    if(schema.error) {
      const error = [];
      for (let i = 0; i < schema.error.details.length; i += 1) {
          error.push(schema.error.details[i].message.split('"').join(' '));

      }
      return res.status(400).json({
          status: 400,
          error: error[0]
      })
  }
  next();
  };

export default attendeeValidation;