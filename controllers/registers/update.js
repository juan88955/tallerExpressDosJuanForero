import Register from "../../models/Register.js";

let updateRegister = async (req, res, next) => {
    try {
        const { _id } = req.body;

        if (!_id) {
            return res.status(400).json({
                success: false,
                message: "ID is required for update"
            });
        }

        const existingRegister = await Register.findById(_id);
        if (!existingRegister) {
            return res.status(404).json({
                success: false,
                message: "Register not found"
            });
        }

        const updatedData = {};
        ['date', 'description', 'value', 'active', 'user'].forEach(field => {
            if (req.body[field] !== undefined) {
                updatedData[field] = req.body[field];
            }
        });

        const updatedRegister = await Register.findByIdAndUpdate(
            _id,
            updatedData,
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: "Register updated successfully",
            response: updatedRegister
        });
    }
    catch (error) {
        next(error)
    }
};

export default updateRegister;