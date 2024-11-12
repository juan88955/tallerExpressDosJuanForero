import Register from "../../models/Register.js";

let updateOne = async (req, res, next) => {
    try {
        if (!req.params.id) {
            return res.status(400).json({
                success: false,
                message: "Register ID is required"
            });
        }

        const existingRegister = await Register.findById(req.params.id);
        if (!existingRegister) {
            return res.status(404).json({
                success: false,
                message: "Register not found"
            });
        }

        const register = await Register.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        res.status(200).json({
            success: true,
            message: "Register updated successfully",
            response: register
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                message: "Validation error",
                errors: error.errors
            });
        }
        next(error);
    }
};

export default updateOne;