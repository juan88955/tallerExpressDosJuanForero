import User from "../../models/User.js";

let updateUser = async (req, res, next) => {
  try {
    const { _id, name, email, address, phone, password, online } = req.body;

    const user = await User.findByIdAndUpdate(_id, {
      name,
      email,
      address,
      phone,
      password,
      online
    }, {
      new: true
    });

    res.status(200).json({
      success: true,
      response: user
    });
  } catch (error) {
    next(error);
  }
};

export default updateUser;