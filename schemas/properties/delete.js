import joi from 'joi-oid'

const schema = joi.object({
    _id: joi.objectId()
        .required()
        .messages({
            'string.pattern.name': 'ID de la propiedad inválida',
            'any.required': 'Se requiere el ID de la propiedad'
        }),
})

export default schema