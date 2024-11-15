import User from '../../models/User.js';
import jwt from 'jsonwebtoken';

let register = async (req, res, next) => {
    try {
        let user = req.body
        user.online = false

        let newUser = await User.create(user)

        const token = jwt.sign(
            {
                id: newUser._id,
                email: newUser.email,
            },
            process.env.SECRET,
            { expiresIn: '24h' }
        )

        return res.status(201).json({
            success: true,
            response: newUser,
            token: token
        })
    } catch (error) {
        next(error);
    }
}

export { register }