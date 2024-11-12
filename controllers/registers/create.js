import Register from "../../models/Register.js";

let createRegister = async (req, res, next) => {
    try {
        const { date, description, value, active, user } = req.body;

        const newRegister = new Register({
            date,
            description,
            value,
            active,
            user
        });

        await newRegister.save();

        return res.status(201).json({
            success: true,
            response: newRegister,
            message: "Register created successfully"
        });

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

export default createRegister;