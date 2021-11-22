import config from "./portConfig";

const Listing = (app) => {
  app.listen(config.port, () => {
    console.log(`Server is UP on PORT:${config.port}`);
  });
};

export default Listing;
