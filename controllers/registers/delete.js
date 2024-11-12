import Register from "../../models/Register.js";

let deleteRegister = async (req, res, next) => {
    try {
        const register = await Register.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            response: register
        });
    } catch (error) {
        next(error);
    }
};

export default deleteRegister;