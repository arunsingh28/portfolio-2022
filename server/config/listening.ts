import config from "./portConfig";
import { Express } from "express";

const Listing = (app: Express) => {
  app.listen(config.port, () => {
    console.log(`Server is UP on PORT:${config.port}`);
  });
};

export default Listing;
