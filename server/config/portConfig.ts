import dotenv from "dotenv";

dotenv.config();

const uri = 'mongodb+srv://arun:134@cluster0.t3qon.mongodb.net/portfolio-query?retryWrites=true&w=majority';

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
const SERVER_PORT = process.env.SERVER_POPT || 4000;
const DATABASR_URI = uri

const config = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
  uri: DATABASR_URI
};

export default config;
