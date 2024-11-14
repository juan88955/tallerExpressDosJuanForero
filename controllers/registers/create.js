import Register from "../../models/Register.js";

let createRegister = async (req, res) => {
    try {
        const register = await Register.create(req.body);
        res.status(201).json({
            success: true,
            response: register,
            message: "Register created successfully"
        });
    }
    catch (error) {
        next(error);
    }
}

export default createRegister;