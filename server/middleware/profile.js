import jwt from "jsonwebtoken";
import keys from "../config/keys_dev.js";
import User from "../models/user.js";
const secret = keys.secretOrKey;
const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodeData;

    if (token && isCustomAuth) {
      decodeData = jwt.verify(token, secret);
      const user = await User.findById(decodeData._id);
      req.userProfile = user;

      req.userId = decodeData?.id;
    } else {
      decodeData = jwt.decode(token);
      const user = await User.findOne({ email: decodeData.email });
      req.userProfile = user;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
