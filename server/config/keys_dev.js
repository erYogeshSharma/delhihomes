import dotenv from "dotenv";
dotenv.config();

const dev = {
  mongoURI: process.env.CONNECTION_URL,
  secretOrKey: process.env.KEY,
};

export default dev;
