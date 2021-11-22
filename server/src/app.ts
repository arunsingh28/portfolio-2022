import express from "express";
import cors from "cors";

// inner modules
import Listing from "../config/listening";

// init express to app
const app = express();

// middlewares

// cors for inteaction with frontend
app.use(cors());

// Server Start and error handing
Listing(app);
