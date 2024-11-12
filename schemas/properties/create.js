import joi from 'joi-oid'

const schema = joi.object({
    name: joi.string()
        .required()
        .min(2)
        .messages({
            'string.empty': 'El nombre es requerido',
            'string.min': 'El nombre debe tener al menos 2 caracteres',
            'any.required': 'Se requiere el nombre de la propiedad'
        }),

    type: joi.string()
        .required()
        .min(2)
        .messages({
            'string.empty': 'El tipo es requerido',
            'string.min': 'El tipo debe tener al menos 2 caracteres',
            'any.required': 'Se requiere el tipo de la propiedad'
        }),

    value: joi.number()
        .required()
        .messages({
            'any.required': 'El valor es obligatorio',
            'number.base': 'El valor debe ser un número'
        }),

    user: joi.objectId()
        .required()
        .messages({
            'string.pattern.name': 'ID del usuario inválido',
            'any.required': 'Se requiere el ID del usuario'
        })
})

export default schema