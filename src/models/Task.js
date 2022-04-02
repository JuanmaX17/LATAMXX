import {Schema,model} from "mongoose"

const taskSchema = new Schema({
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

export default model("task",taskSchema);
