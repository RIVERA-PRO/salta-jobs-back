import Joi from 'joi-oid';

const schema = Joi.object({
    // seller_id: Joi
    //     .objectId()
    //     .required(),
    photo: Joi
        .string()
        // .required()
        .min(8)
        .uri()
        .messages(
            {
                'string.min': 'La foto debe tener al menos 8 caracteres',
                'string.empty': 'La foto no puede estar vacía',
                'any.required': 'Se requiere una foto',
                'string.uri': 'Se necesita una URL válida'
            }
        ),
    mail: Joi
        .string()
        .min(3)
        .max(100)
    ,
    vacantes: Joi
        .number(),
    salario: Joi
        .number(),
    instagram: Joi
        .string()
        .min(3)
        .max(100)
    ,
    facebook: Joi
        .string()
        .min(3)
        .max(100)
    ,
    telefono: Joi
        .number()

    ,
    web: Joi
        .string()
        .min(3)
        .max(100)
    ,
    name: Joi
        .string()
        .min(3)
        .max(100)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 30 characters",
            'string.required': 'the title is required',
        }),
    title: Joi
        .string()
        .required()
        .min(3)
        .max(100)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 30 characters",
            'string.required': 'the title is required',
        }),
    description: Joi
        .string()
        .required()
        .min(3)
        .max(1000)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 1000 characters",
            'string.required': 'the title is required',
        }),
    ubicacion: Joi
        .string()
        .required()
        .min(3)
        .max(500)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 500 characters",
            'string.required': 'the title is required',
        }),
    lugar: Joi
        .string()
        .required()
        .min(3)
        .max(500)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 500 characters",
            'string.required': 'the title is required',
        }),
    cover_photo: Joi
        .string()
        .uri()
        .required(),
    categoria: Joi

        .required()

        .messages({
            "string.min": "The description must have at least 20 characters",
            "string.max": "The description must have a maximum of 200 characters",
            'string.required': 'the description is required',
        }),
    category_id: Joi
        .objectId()
        .required(),
    user_id: Joi
        .objectId()
        .required(),
    // pages: Joi
    //     .array()
    //     .required()

    //     .messages({
    //         "pages": "field must be a valid URL, separated by commas."
    //     }),

    // vacantes: Joi
    //     .number()

    //     .messages({
    //         "price": "field must be a valid number."
    //     }),
})

export default schema