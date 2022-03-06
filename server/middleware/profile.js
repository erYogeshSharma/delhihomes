import jwt from "jsonwebtoken";
import keys from "../config/keys_dev.js";

const secret = keys.secretOrKey;
const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodeData;

    if (token && isCustomAuth) {
      decodeData = jwt.verify(token, secret);

      req.userId = decodeData?.id;
    } else {
      decodeData = jwt.decode(token);
      req.userId = decodeData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
