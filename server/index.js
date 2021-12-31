import express from 'express';
import bodyParser  from 'body-parser';
import  mongoose  from 'mongoose';
import cors from 'cors';


import userRouter from "./routes/user.js";
import profileRouter from "./routes/profile.js";

// const CONNECTION_URL= " mongodb+srv://golu6096:golu12345@cluster0.exzqf.mongodb.net/DELHI_HOMES?retryWrites=true&w=majority";
const CONNECTION_URL= "mongodb://localhost:27017/DelhiHomes";
const PORT = 5000;
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit:'30mb' , extended: true }))
app.use(cors());

app.use("/user", userRouter);
app.use("/profile",profileRouter);



mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology:true }) 
  .then(() => app.listen(PORT, () => console.log(`server running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));


