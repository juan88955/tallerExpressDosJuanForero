import User from "../models/User.js";

export default async (req, res, next) => {
    try {
        let account = await User.findOne({ email: req.body.email })
        if (account) {
            req.user = {
                email: account.email,
                address: account.address,
                phone: account.phone,
                password: account.password,
                online: account.online

            }
            return next()
        }
        return res.status(400).json({
            success: false,
            messages: 'User does not exist'
        })
    } catch (error) {
        next(error)
    }
}