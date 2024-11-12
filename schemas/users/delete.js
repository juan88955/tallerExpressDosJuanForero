import joi from 'joi-oid';

const schema = joi.object({
    _id: oi.objectId()
        .required()
        .min(2)
        .messages({
            'string.empty': 'El nombre es requerido',
            'string.min': 'El nombre debe tener al menos 2 caracteres',
            'any.required': 'Se requiere el nombre del usuario a eliminar'
        }),
})

export default schema