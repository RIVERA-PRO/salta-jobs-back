import Joi from 'joi-oid';

const schema = Joi.object({
    destino_id: Joi
        .objectId()
        .required(),
    title: Joi
        .string()
        .required()
        .min(4)
        .messages({
            'string.min': 'the title must be at least 4 characteres',
            'string.empty': 'the title cannot be empty',
            'string.required': 'the title is required',
        }),
    pages: Joi
        .array().items(Joi.string().uri())
        .required()
        .min(1)
        .messages({
            'any.required': 'the pages have to be url',
            'string.empty': 'the pages cannot be empty'
        }),
    price: Joi
        .number(),

})

export default schema