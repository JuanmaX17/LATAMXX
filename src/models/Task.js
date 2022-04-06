import {Schema,model} from "mongoose"

const registroSchema = new Schema({
    nombre: {//title
        type: "string",


    },
    apellidos: {//descripcion
        type: String,
   
    },
    email: {
        type: String,
        require: true, 
        unique: true
        
    },
    telefono: {
        type: String,

        
    },
     password: {
        type: String,

    }
},{
    timestamps: true,
    versionKey: false,
})


const solicitudesBeca = new Schema({
    nombre: String,
    apellidos: String,
    email: String,
    telefono: String,
    razon: String,
    nacimiento: Date,
    curso: String

},{
    timestamps: true,
    versionKey: false
}) 

export const modeloUser = model("task",registroSchema);
export const modeloBecas = model("solicitudesBecas",solicitudesBeca);
