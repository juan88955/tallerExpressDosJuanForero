import User from "../../models/User.js";

let allUser = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            response: users
        });
    } catch (error) {
        next(error);
    }
};

let getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            success: true,
            response: user
        });
    } catch (error) {
        next(error);
    }
};


let userById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            success: true,
            response: user
        });
    } catch (error) {
        next(error);
    }
};

export { allUser, getUser, userById };