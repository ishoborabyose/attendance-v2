import Joi from 'joi';

const employeeValidation = (req, res, next) =>{
    const dataSchema = Joi.object({
        employeeId: Joi.number().integer().required(),
        cardId: Joi.string().min(3).required(),
        firstName: Joi.string().alphanum().min(3).required(),
        lastName: Joi.string().alphanum().min(3).required(),
        gender: Joi.string().alphanum().min(4).max(6).required(),
        department: Joi.string().min(4).required(),
        position : Joi.string().min(4).required(),
        phoneNumber: Joi.string().min(10).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
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