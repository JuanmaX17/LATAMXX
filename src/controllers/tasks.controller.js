import {modeloUser,modeloBecas} from "../models/Task"
import crypto from "crypto";
import bcryptjs from "bcryptjs";
import session from "express-session";



/* RUTA DE INICIO */
export const inicio = async(req,res)=>{
    const tasks = await modeloUser.find().lean();
    var session = req.session.login;
    var nombre = req.session.nombre; 
   

    res.render("index",{session,nombre});

}




/* FORMULARIO DE REGISTRO GET */
export const registroGet = (req,res)=>{
    res.render("registro");
}

/* FORMULARIO DE REGISTRO POST */
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

        /* Ejemplo de como hacer que al recargar no aparezcan los mensajes por si asi se desea */
        req.session.errorRegistro = true
        var errorRegistro = req.session.errorRegistro 
        res.render("index",{errorRegistro})
        
    }
}

/* FORMULARIO GET */
export const loginVista = (req,res)=>{
    res.render("login");
}

/* LOGOUT */
export const logout = (req,res)=>{
    delete req.session.login;
    delete req.session.nombre;
    res.redirect("/");
}


/* FORMULARIO DE INICIO DE SESSION POST*/
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
            var mensajeBienvenida = true
            var nombre = req.session.nombre; 
            res.render("index",{session,nombre,id: task._id,message: "Bienvenido ",mensajeBienvenida});
            

   
        }else{
            console.log("contra o password incorrectos");
            var sesion = false;

            res.render("login",{messageUser: "el usuario no existe",session});
        }

        
    }catch(e){
        console.log("error",e)
    }
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
    res.render("tours",{session,nombre});
}

/* Beca modal */

export const beca = async(req,res)=>{

    var datosBeca = modeloBecas(req.body);

    var soliSave = await datosBeca.save();
    var session = req.session.login;
    var nombre = req.session.nombre;

    res.render("index",{message: "Solicitud enviada con exito, responderemos lo antes posible",beca: true,session,nombre})

}


/* CATEGORIAS DE CURSOS HOMOLOGABLES PERSONAS Y EMRPESAS */
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
    res.render("cursosHomologablesEmpresas",{session,nombre});
}

export const cursosNoHomologablesEmpresas = async(req,res)=>{
    var session = req.session.login;
    var nombre = req.session.nombre;

    res.render("cursosNoHomologablesEmpresas",{session,nombre});
}

export const tutoriales = (req,res)=>{
    var session = req.session.login;
    var nombre = req.session.nombre;

    res.render("tutoriales",{session,nombre});
}
/* ------------------------------------------------------ */



/* ---------------TODA LA SECCION DE CURSOS -------------*/



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
    var session = req.session.login;
    var nombre = req.session.nombre; 
    res.render("optimizacionProductos",{session,nombre,curso:"Optimizacion de productos"});
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
    res.render("habilidades",{session,nombre,curso:"Habilidades digitales"});
}

/* Se un aprendiz digital */
export const aprendizDigital = (req, res)=>{
    var session = req.session.login;
    var nombre = req.session.nombre; 
    res.render("aprendizDigital",{session,nombre,curso:"Se un Aprendiz Digital"});
}

/* Bases de adminsitracion de equipos */

export const administracionEquipos = (req, res)=>{
    var session = req.session.login;
    var nombre = req.session.nombre; 
    res.render("administracionEquipos",{session,nombre,curso:"administracion de Equipos"});
}

/* Curso de diseño al cliente */
export const curso = (req, res)=>{
    var session = req.session.login;
    var nombre = req.session.nombre; 
    res.render("designClient",{session,nombre,curso: "Diseño basado en el cliente"});
}

/* La idea sabiendo que ustedes ya tienen categirzados sus crusos es solo que copien y peguen uno de ejemplo y reemplazen la informacion */
/* session indica que la sesion se mantiene en cada renderizado igual q el nombre, el curso es para identificar los pagos y las solicitudes de beca, es decir de que curso se solicitan y hacen */
/* tambien si quieren mas orden pueden crear una carpeta para cursos y solo cambiar las rutas */
/* es importante tras crear el render CREAR LA RUTA y eso seria todo, solo es reemplazar */

/* ----------------------------------------------------- */











/* El codigo aqui abajo comentado no les va a funcionar, pero les servira de guia para funcionalidades extras de un tipico CRUD */
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
            console.log("usuario actualizado correctamente");
        }else{
            console.log("usuario no encontrada")
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
        console.log("usuario eliminado")
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


    await task.save()
    res.redirect("/");
}  */