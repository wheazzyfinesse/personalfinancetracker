import express from "express";
import mongoose from "mongoose";
import financialrecordsroute from "./route/financialrecordrouter.js";
import cors from "cors";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
const MONGO_URI =
	"mongodb+srv://wheazzyfinesse:mydb1@mydb.5opdskt.mongodb.net/?retryWrites=true&w=majority&appName=mydb";

app.use("/financial-records", financialrecordsroute);
app.get("/", (req,res)=>{
	res.send("welcome")
});

mongoose
	.connect(MONGO_URI)
	.then(() => console.log("CONNECTED TO MONGODB"))
	.catch((err) => console.error("Failed to connect to DB", err));

app.listen(port, () => console.log(`listening on ${port}`));
