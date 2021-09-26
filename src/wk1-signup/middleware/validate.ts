import joi from 'joi';

const userSchema = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    email: joi.string().trim().lowercase().email({
        minDomainSegments: 2,
        tlds: {
            allow: ["com", "net", "in"]
        }
    }),
    password: joi.string().required()
})

export default userSchema