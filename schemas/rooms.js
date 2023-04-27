import Joi from "joi";

const schema = Joi.object({
    title: Joi
        .string()
        .required()
        .min(2)
        .max(20)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 20 characters",
            'string.required': "the title is required",
        }),

    price: Joi 
        .number()
        .required()
        .messages({
            "number.required": "The price is required"
        }),

    maxPeople: Joi
        .number()
        .required()
        .messages({
            "number.required": "The amount of people is required"
        }),

    description: Joi
        .string()
        .required()
        .min(5)
        .max(200)
        .messages({
            "string.min": "The description must have at least 5 characters",
            "string.max": "The description must have a maximum of 200 characters",
            "string.required": "The description is required"
        }),

    roomNumbers: Joi
        .array()
        .required()
        .messages({
            "number.required": "The room numbers is required"
        })

})

export default schema