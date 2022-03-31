import config from "./portConfig";
import { Express } from "express";
import mongoose from 'mongoose'



const Listening = async (app: Express) => {
  app.listen(config.port, () => {
    console.log(`Server is UP on PORT:${config.port}`);
  });

  function dbConnection(){
   try {
    mongoose.connect(config.uri).then(()=>{
      console.log('Production database is connected')
    }).catch((e)=>{
      mongoose.connect('mongodb://localhost:27107/portfolio-query').then(()=>{
        console.log('Local Database is connected')
      }).catch((e)=>{
        console.log('local database is not connected')
      })
      console.log('Production database is not connected')
    })
   } catch (error) {
     console.log('Both Database server fail to connted')
   }
    const conSuccess = mongoose.connection;
    conSuccess.on('error', console.error.bind('connection error:'));
  }

  dbConnection()
};


export default Listening;
