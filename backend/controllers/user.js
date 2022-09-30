import User from "../models/User.js";

export const register = async (req, res) => {
  try {
    const user = await new User(req.body).save();
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
