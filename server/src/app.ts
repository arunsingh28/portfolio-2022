import express from "express";
import cors from "cors";

// **********inner modules************
import Listing from "../config/listening";
import Router from "./Routes/index";

// init express to app
const app = express();

// **********middlewares**************
// cors for inteaction with frontend
app.use(cors());

// **************Router**************
Router(app);

// Server Start and error handing
Listing(app);
