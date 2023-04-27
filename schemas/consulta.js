import Joi from "joi"

const schema = Joi.object({
    name: Joi
        .string()
        .required()
        .min(3)
        .messages(
            {
                'string.min': 'The name must be at least 3 characters',
                'string.empty': 'The name cannot be empty',
                'any.required': 'A name is required'
            },
        ),
    email: Joi
        .string()
        .required()
        .min(8)
        .email({ minDomainSegments: 2  })
        .messages(
            {
                'string.min': 'The mail must be at least 8 characters',
                'string.empty': 'The mail cannot be empty',
                'any.required': 'A mail is required',
                'string.email': 'A valid mail is necessary'
            }
        ),
    question: Joi
        .string()
        .required()
        .min(3)
        .max(500)
        .messages(
            {
                'string.min': 'The password must be at least 3 characters',
                'string.max': 'The password cannot exceed 500 characters'
            }
        )
})
    export default schema