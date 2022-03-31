import config from "./portConfig";
import { Express } from "express";
import mongoose from 'mongoose'

const uri = 'mongodb+srv://arun:1234@cluster0.t3qon.mongodb.net/login-microservice?retryWrites=true&w=majority';

const Listening = async (app: Express) => {
  app.listen(config.port, () => {
    console.log(`Server is UP on PORT:${config.port}`);
  });
  function dbConnection(){
    mongoose.connect(uri).then(()=>{
      console.log('database is connected')
    }).catch((e)=>{
      console.log('database not connected')
    })
    const conSuccess = mongoose.connection;
    conSuccess.on('error', console.error.bind(console, 'connection error:'));
  }

  dbConnection
};


export default Listening;
