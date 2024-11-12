import joi from 'joi-oid';
import { register } from '../../controllers/users/register';

const schema = joi.object({
    _id: oi.objectId()
        .required()
        .messages({
            'any.required': 'El campo _id es obligatorio',
            'string.base': 'El campo _id debe ser un string'
        }),

    properties: joi.objectId()
        .required()
        .messages({
            'any.required': 'El campo properties es obligatorio',
            'string.base': 'El campo properties debe ser un string'
        }),

    register: joi.objectId()
        .required()
        .messages({
            'any.required': 'El campo register es obligatorio',
            'string.base': 'El campo register debe ser un string'
        }),

})


export default schema
