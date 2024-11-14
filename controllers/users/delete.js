import User from "../../models/User.js";

let deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "User deleted",
            user: deletedUser
        });
    } catch (error) {
        next(error);
    }
}

export default deleteUser;