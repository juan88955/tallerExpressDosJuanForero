import User from "../../models/User.js";

let deleteOne = async (req, res, next) => {
    try {
        const { userId } = req.body;

        const deletedUser = await User.findByIdAndDelete(userId);

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
};

export default deleteOne;