const express = require("express");
const bodyParser = require ("body-parser");
const cors = require('cors');
const dotenv = require("dotenv").config();
// import multer from "multer";
const helmet = require('helmet')
const morgan = require('morgan')
const connectDb = require("./config/dbConnection");



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
app.use("/api/users", require("./routes/userRoutes"));
// app.use("/api/contacts", require("./routes/contactRoutes"));


app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
