import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv'
// import multer from "multer";
import helmet from 'helmet';
import morgan from "morgan";
import {connectDb} from "./config/dbConnection.js"
// import registerUser from "./routes/userRoutes.js"



dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:'cross-origin'}))
app.use(morgan("common"))
app.use(bodyParser.json({limit:'30mb', extended:'true'}))
app.use(bodyParser.urlencoded({limit:'30mb', extended:'true'}))
app.use(cors())

connectDb();

const port = process.env.PORT || 6001;

/*route */
// app.use("/api/contacts", require("./routes/contactRoutes"));
// app.use("/api/users", registerUser);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
