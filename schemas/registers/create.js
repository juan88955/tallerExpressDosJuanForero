import joi from 'joi-oid'

const schema = joi.object({
    date: joi.date()
        .required()
        .messages({
            'any.required': 'La fecha es obligatoria',
            'date.base': 'La fecha debe ser una fecha válida'
        }),
    description: joi.string()
        .required()
        .min(2)
        .messages({
            'string.empty': 'La descripción es requerida',
            'string.min': 'La descripción debe tener al menos 2 caracteres',
            'any.required': 'Se requiere la descripción del registro'
        }),
    value: joi.number()
        .required()
        .messages({
            'any.required': 'El valor es obligatorio',
            'number.base': 'El valor debe ser un número'
        }),
    active: joi.boolean()
        .required()
        .messages({
            'any.required': 'El campo active es obligatorio',
            'boolean.base': 'El campo active debe ser un booleano'
        }),
    user: joi.objectId()
        .required()
        .messages({
            'string.pattern.name': 'ID del usuario inválido',
            'any.required': 'Se requiere el ID del usuario'
        })
})

export default schema