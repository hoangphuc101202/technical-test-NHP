import Joi from "joi";

const createProduct = Joi.object({
    name: Joi.string().required().messages({ 'any.required': 'Name is required' }),
    description: Joi.string().required().messages({ 'any.required': 'Description is required' }),
    price: Joi.number().required().messages({ 'any.required': 'Price is required' })
});

  export default createProduct;