import express from "express";
import dotenv from "dotenv";
import client from "./db.js";
dotenv.config();
const app = express();
const port_number = process.env.PORT_NUMBER || 8000;
app.use(express.json());
const connectdb = async () => {
  try {
    await client.connect();
    console.log("postgresql database connected");
  } catch (error) {
    console.log(error);
  }
};

app.get('/todos',async(req,res)=>{
  try {
    const todos = client.query('')
    
  } catch (error) {
    console.log(error);
  }
})
app.listen(port_number, () => {
  connectdb();
  console.log(`app listening on port number ${port_number}`);
});
