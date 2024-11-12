import joi from 'joi-oid'

const schema = joi.object({
    _id: joi.objectId()
        .required()
        .messages({
            'string.pattern.name': 'ID del registro inválido',
            'any.required': 'Se requiere el ID del registro'
        }),

    user: joi.objectId()
        .required()
        .messages({
            'string.pattern.name': 'ID del usuario inválido',
            'any.required': 'Se requiere el ID del usuario'
        })
})

export default schema