import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

// @desc signin users
// @route POST /api/users/signin
// @access Private
export const signin = async (req, res) => {
  const { email, passsword } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "user does not exist" });

    const isPasswordCorrect = await bcrypt.compare(
      passsword,
      existingUser.passsword
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// @desc signup users
// @route POST /api/users/signup
// @access Private
export const signup = async (req, res) => {
  const { email, passsword, confirmPassword, firstName, lastName } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "user already existed" });

    if (passsword !== confirmPassword)
      return res.status(400).json({ message: "passwords do not match" });

    const hashedPassword = await bcrypt.hash(passsword, 12);

    const result = await User.create({
      email,
      passsword: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1h",
    });

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
