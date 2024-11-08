const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwtProvider = require("../config/jwtProvider.js");

const createUser = async (userData) => {
  try {
    let { firstName, lastName, email, password } = userData;

    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      throw new Error("User Already Exist With Email: " + email);
    }

    password = await bcrypt.hash(password, 8);

    const user = await User.create({ firstName, lastName, email, password });

    console.log("Created User", user);

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User Not Found With Email: " + email);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createUser,
  getUserByEmail
};
