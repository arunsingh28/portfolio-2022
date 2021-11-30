import express from "express";
import cors from "cors";

// **********inner modules************
import Listening from "../config/listening";
import Router from "./Routes/index";

// init express to app
const app = express();

// bodyParser
app.use(express.json())
app.use(express.text())

// **********middlewares**************
// cors for inteaction with frontend
app.use(cors());

// **************Router**************
Router(app);

// Server Start and error handing
Listening(app);
