import joi from 'joi-oid';

const schema = joi.object({
   name: joi.string()
       .required()
       .min(3)
       .max(30)
       .pattern(/^[a-zA-Z0-9\s]*$/)
       .messages({
           'string.base': 'Name must be text',
           'string.empty': 'Name is required',
           'string.min': 'Name must be at least 3 characters long',
           'string.max': 'Name cannot be more than 30 characters long',
           'string.pattern.base': 'Name can only contain letters, numbers and spaces',
           'any.required': 'Name is required'
       }),

   email: joi.string()
       .required()
       .email()
       .lowercase()
       .messages({
           'string.empty': 'Email is required',
           'string.email': 'Please enter a valid email',
           'any.required': 'Email is required'
       }),

   address: joi.string()
       .required()
       .min(5)
       .max(100)
       .messages({
           'string.empty': 'Address is required',
           'string.min': 'Address must be at least 5 characters long',
           'string.max': 'Address cannot be more than 100 characters long',
           'any.required': 'Address is required'
       }),

   phone: joi.number()
       .required()
       .integer()
       .min(1000000)
       .max(9999999999)
       .messages({
           'number.base': 'Phone must be a number',
           'number.integer': 'Phone must be an integer',
           'number.min': 'Phone must be at least 7 digits long',
           'number.max': 'Phone cannot be more than 10 digits long',
           'any.required': 'Phone is required'
       }),

   password: joi.string()
       .required()
       .min(8)
       .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
       .messages({
           'string.empty': 'Password is required',
           'string.min': 'Password must be at least 8 characters long',
           'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
           'any.required': 'Password is required'
       }),

   online: joi.boolean()
       .required()
       .messages({
           'boolean.base': 'Online field must be true or false',
           'any.required': 'Online field is required'
       }),

   properties: joi.objectId()
       .messages({
           'string.pattern.name': 'Properties ID is not valid'
       }),

   register: joi.objectId()
       .messages({
           'string.pattern.name': 'Register ID is not valid'
       })
})

export default schema;