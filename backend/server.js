import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import problemroutes from "./routes/problemroutes.js";

const app =express();

const PORT=process.env.PORT || 3000;

app.use(helmet());

app.use(morgan("dev"));

app.use(express.json());

app.use(cors());

app.get("/", (req, res)=>{
   console.log(res.getHeaders());
   res.send("Hello from backend");
});

app.use("/api/problems", problemroutes)

app.listen(PORT, ()=>
{
   console.log("Server is running on port "+PORT)
});
