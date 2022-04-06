import {modeloUser,modeloBecas} from "../models/Task"
import crypto from "crypto";
import bcryptjs from "bcryptjs";



export const inicio = async(req,res)=>{
    const tasks = await modeloUser.find().lean();
    var sesion = req.session.login;
    var nombre = req.session.nombre; 
     console.log(sesion,nombre);
    res.render("index",{sesion,nombre});

}


/* Curso de diseño al cliente */
export const curso = (req, res)=>{
    var session = req.session.login;
    var nombre = req.session.nombre; 
    res.render("designClient",{session,nombre});
}

/* formulario de registro */
export const registroGet = (req,res)=>{
    res.render("registro");
}
/* captar datos del formulario de registro */
 export const registroPost = async(req,res)=>{
    try{
        const task = modeloUser(req.body);
        console.log(task)
        let passwordHash = await bcryptjs.hash(task.password,8)
        console.log("password hash: " + passwordHash);
        task.password = passwordHash;
        var taskSave = await task.save();


        res.render("login",{id: task._id,message: "Registro exitoso",registro: true});
    }catch(e){
        console.log("error",e)
    }
}

/* formulario de login */
export const loginVista = (req,res)=>{
    res.render("login");
}

/* Logout */
export const logout = (req,res)=>{
    delete req.session.login;
    delete req.session.nombre;
    res.redirect("/");
}
/* captar formulario de login e iniciar sesion */
export const login = async(req,res)=>{
    
    try{
        
        var task = req.body;
        console.log(task.email);

        const objectDb = await modeloUser.find({email: task.email});


        let compare = bcryptjs.compareSync(task.password,objectDb[0].password)
     
  
        if(compare && task.email == objectDb[0].email){
            console.log("inicio sesion");
            console.log(req.session);
            req.session.login = true;
            req.session.nombre = objectDb[0].nombre;
            var session = req.session.login;
            var nombre = req.session.nombre; 
            res.render("index",{session,nombre,id: task._id,message: "Inicio de session exitoso"});

   
        }else{
            console.log("contra o pass incorrectos");
            var sesion = false;

            res.render("login",{messageUser: "el usuario no existe",session});
        }

        
    }catch(e){
        console.log("error",e)
    }
}






/* viaje en linea */
export const viajeEnLinea = (req, res)=>{
    var session = req.session.login;
    var nombre = req.session.nombre; 
    res.render("viajeEnLinea",{session,nombre,curso:"Viaje en Linea"});
}


/* Prototipado productos */
export const prototipadoProductos = (req, res)=>{
    var session = req.session.login;
    var nombre = req.session.nombre; 
    res.render("prototipadoProductos",{session,nombre,curso:"Prototipado de productos"});
}




/* optimizacion de Productos  */
export const optimizacionProductos = (req, res)=>{
    res.render("optimizacionProductos");
}

/* pensamiento digital */
export const pensamientoDigital = (req, res)=>{
    var session = req.session.login;
    var nombre = req.session.nombre; 
    res.render("pensamientoDigital",{session,nombre,curso:"Pensamiento Digital"});
}



/* habilidades */
export const habilidades = (req, res)=>{
    var session = req.session.login;
    var nombre = req.session.nombre; 
    res.render("habilidades",{curso: "Habilidades digitales",session,nombre,curso:"Habilidades digitales"});
}



/* Bootcamps */

export const bootcamps = (req,res)=>{
    var session = req.session.login;
    var nombre = req.session.nombre; 
    res.render("bootcamps",{session,nombre});
}

/* hackathons */
export const hackathons = (req,res)=>{
    var session = req.session.login;
    var nombre = req.session.nombre; 
    res.render("hackathons",{session,nombre});
}


/* tours */

export const tours = (req,res)=>{
    var session = req.session.login;
    var nombre = req.session.nombre;
    res.render("tours",session,nombre);
}

/* Beca modal */

export const beca = async(req,res)=>{

    var datosBeca = modeloBecas(req.body);

    var soliSave = await datosBeca.save();
    var session = req.session.login;
    var nombre = req.session.nombre;

    res.render("index",{message: "Solicitud enviada con exito, responderemos lo antes posible",beca: true,session,nombre})

}

export const cursosHomologablesPersonas = async(req,res)=>{
    var session = req.session.login;
    var nombre = req.session.nombre;

    res.render("cursosHomologablesPersonas",{session,nombre});
}

export const cursosNoHomologablesPersonas = async(req,res)=>{
    var session = req.session.login;
    var nombre = req.session.nombre;

    res.render("cursosNoHomologablesPersonas",{session,nombre});
}


export const cursosHomologablesEmpresas = async(req,res)=>{
    var session = req.session.login;
    var nombre = req.session.nombre;
    res.render("cursosNoHomologablesEmpresas",{session,nombre});
}

export const cursosNoHomologablesEmpresas = async(req,res)=>{
    var session = req.session.login;
    var nombre = req.session.nombre;

    res.render("cursosNoHomologablesEmpresas",{session,nombre});
}


/* 
export const editTask = async(req,res)=>{
    const id = req.params.id;
    try{
        const task = await modeloUser.findById(id).lean()
        res.render("edit",{task})
    }catch(e){
        console.log(e)
    }

}

export const updateTask = async(req,res)=>{
    const {id} = req.params;
    console.log(id)
    try{
        const taskUpdate = await modeloUser.findByIdAndUpdate(id,req.body).lean()
        console.log("---",taskUpdate)
        if(taskUpdate._id == id){
            console.log("Tarea actualizada correctamente");
        }else{
            console.log("Tarea no encontrada")
        }
        
        res.json({
            estado: true,
        })
    }catch(e){
        console.log(e)
        res.json({
            estado: false,
        })
    }

}

export const deleteTask = async(req, res)=>{

    const id = req.params.id
    try{
        const taskDelete = await modeloUser.findByIdAndDelete(id)
        console.log("Tarea eliminada")
        res.json({
            estado: true
        })
    }catch(e){
        res.json({
            estado: false
        })
        console.log(e)
    }
    

}

export const toggleTask = async(req, res)=>{
    const id = req.params.id;
    const task = await modeloUser.findById(id);
    console.log(task);
    task.done = !task.done;

    await task.save()
    res.redirect("/");
}  */