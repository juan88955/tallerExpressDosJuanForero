import Register from "../../models/Register.js";

let deleteRegister = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRegister = await Register.findByIdAndDelete(id);
        if (!deletedRegister) {
            return res.status(404).json({
                success: false,
                message: "Register not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Register deleted",
            register: deletedRegister
        });
    }
    catch (error) {
        next(error);
    }
}

export default deleteRegister;