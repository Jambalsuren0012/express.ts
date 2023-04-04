import express,{Application, Request, Response} from "express"
import connectDB from "./config/db";
import dotenv from "dotenv";
dotenv.config();

const app:Application = express()

const MONGO_URI = process.env.MONGO_URI || " ";

app.get("/", (req: Request, res:Response)=>{
    res.send("hello express ts")
});

connectDB("mongodb+srv://Jaggie:User1234@cluster0.peehmse.mongodb.net/?retryWrites=true&w=majority");

app.listen(8000, ( )=> {
    console.log("app running at 8000port")
})