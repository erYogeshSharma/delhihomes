import express from 'express';
import bodyParser  from 'body-parser';
import  mongoose  from 'mongoose';
import cors from 'cors';


const CONNECTION_URL= " mongodb+srv://golu6096:golu12345@cluster0.exzqf.mongodb.net/DELHI_HOMES?retryWrites=true&w=majority";
const PORT = 3000;
const app = express();

app.use(express.json({ limit: '30mb', extended: true}))
app.use(express.urlencoded({limit:'30mb' , extended: true }))
app.use(cors());



mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology:true }) 
  .then(() => app.listen(PORT, () => console.log(`server running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));


  