import Joi from 'joi';

const testSchema = Joi.object({
  category: Joi.number().required(),
  name: Joi.string().required(),
  link: Joi.string().uri().required(),
  professor: Joi.number().required(),
  discipline: Joi.number().required(),
});

export default testSchema;
