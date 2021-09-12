import Joi from 'joi';

const employeeValidation = (req, res, next) =>{
    const dataSchema = Joi.object({
        name: Joi.string().min(3).required(),
        gender: Joi.string().min(4).max(6).required(),
        department: Joi.string().min(4).required(),
        position : Joi.string().min(4).required(),
        contact: Joi.string().min(10).required(),
        email: Joi.string().email({ tlds: { allow: false } }),
        cardId: Joi.string().min(5).required(),
       
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

export default employeeValidation;