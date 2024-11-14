import User from "../../models/User.js";

let updateUser = async (req, res, next) => {
  try {
    const { _id } = req.body;

    if (!_id) {
      return res.status(400).json({
        success: false,
        message: "ID is required for update"
      });
    }

    const existingUser = await User.findById(_id);
    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    const updatedData = {};
    ['name', 'email', 'address', 'phone', 'password', 'online'].forEach(field => {
      if (req.body[field] !== undefined) {
        updatedData[field] = req.body[field];
      }
    });

    const updatedUser = await User.findByIdAndUpdate(
      _id,
      updatedData,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      response: updatedUser
    });
  }
  catch (error) {
    next(error)
  }
};

export default updateUser;