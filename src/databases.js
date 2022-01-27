import {connect} from "mongoose";
import {MONGODB_URI} from"./config"

(async()=>{
    const db = await connect(MONGODB_URI); 
    try{
            console.log("DB connected to", db.connection.name);
        }catch(e){
            console.log("error en la conexion a la base de datos",e);
        }
    })()