import Joi from "joi-oid";

const schema = Joi.object({
    // seller_id: Joi
    //     .objectId()
    //     .required(),

    name: Joi
        .string()
        .required()
        .min(3)
        .max(20)
        .messages({
            "string.min": "The name must have at least 3 characters",
            "string.max": "The name must have a maximum of 20 characters",
            'string.required': 'the name is required',
        }),

    type: Joi
        .string()
        .required()
        .min(5)
        .max(15)
        .messages({
            "string.min": "The type must have at least 5 characters",
            "string.max": "The type must have a maximum of 20 characters",
            'string.required': 'the type is required',
        }),

    continent: Joi
        .string()
        .required()
        .min(2)
        .max(10)
        .messages({
            "string.min": "The continent must have at least 2 characters",
            "string.max": "The continent must have a maximum of 10 characters",
            'string.required': 'the continent is required',
        }),

    country: Joi
        .string()
        .required()
        .min(3)
        .max(500)
        .messages({
            "string.min": "The country must have at least 3 characters",
            "string.max": "The country must have a maximum of 500 characters",
            'string.required': 'the country is required',
        }),

    address: Joi
        .string()
        .required()
        .min(3)
        .max(25)
        .messages({
            "string.min": "The addres must have at least 3 characters",
            "string.max": "the addres must have a maximum of 25 characters",
            "string.required": "the addres is required"
        }),

    distance: Joi
        .string()
        .required()
        .min(1)
        .max(10)
        .messages({
            "string.min": "the distance must have at least 1 characters",
            "string.max": "the distance must have a maximum of 10 characters",
            "string.required": "the distance is required"
        }),

    cover_photo: Joi
        .string()
        .uri()
        .required()
        .messages({
            "string.required": "the photo is required"
        }),

    title: Joi
        .string()
        .required()
        .min(3)
        .max(30)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 30 characters",
            "string.required": "the title is required"
        }),

    description: Joi
        .string()
        .required()
        .min(3)
        .max(500)
        .messages({
            "string.min": "The description must have at least 3 characters",
            "string.max": "The description must have a maximum of 500 characters",
            "string.required": "the description is required"
        }),

    rating: Joi
        .number()
        .min(0)
        .max(5),

    rooms: Joi
        .array(),

    cheapestPrice: Joi
        .number()
        .required()
        .min(1)
        .max(10)
        .messages({
            "number.min": "the cheapest price must have at least 1 number",
            "number.max": "the cheapest price must have a maximum of 10 numbers",
            "number.required": "the cheapest price is required"
        }),

    featured: Joi
        .boolean()
        .required()
        .messages({
            "boolean.required": "the featured is required"
        })

})

export default schema