import Register from "../../models/Register.js";

let allRegisters = async (req, res, next) => {
    try {
        const registers = await Register.find().populate('user').exec();
        res.status(200).json({
            success: true,
            response: registers
        });
    } catch (error) {
        next(error);
    }
};

let getRegister = async (req, res, next) => {
    try {
        const register = await Register.findById(req.params.id);
        res.status(200).json({
            success: true,
            response: register
        });
    } catch (error) {
        next(error);
    }
};

export { allRegisters, getRegister };