import modelo from "../models/Task"
import crypto from "crypto";

export const inicio = async(req,res)=>{
    const tasks = await modelo.find().lean();
    var sesion = req.session.login;
    var nombre = req.session.nombre; 
     console.log(sesion,nombre);
    res.render("inicio",{sesion,nombre});

}


/* Curso de diseño al cliente */
export const curso = (req, res)=>{
    res.render("designClient");
}

/* formulario de registro */
export const registroGet = (req,res)=>{
    res.render("registro");
}
/* captar datos del formulario de registro */
 export const registroPost = async(req,res)=>{
    try{
        const task = modelo(req.body);
        console.log(task)
        var mykey = crypto.createCipher('aes-128-cbc', task.password);
        var mystr = mykey.update('abc', 'utf8', 'hex')
        mystr += mykey.final('hex');
        console.log(mystr);
        task.password = mystr;
        const taskSave = await task.save();
        res.render("login");
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
        const task = modelo(req.body);
        console.log(task)
        const email = await modelo.findOne({email: task.email});
        const contraseña = await modelo.findOne({password: task.password});
        if(email != null && contraseña != null){
            console.log("inicio sesion");
            console.log(req.session);
            req.session.login = true;
            req.session.nombre = email.nombre;
            var sesion = req.session.login;
            var nombre = req.session.nombre; 
            res.render("inicio",{sesion,nombre});
   
        }else{
            console.log("contra o pass incorrectos");
            var sesion = false;

            res.render("login",{message: "el usuario no existe",sesion});
        }

        
    }catch(e){
        console.log("error",e)
    }
}


export const categorias = (req, res)=>{
    var sesion = req.session.login;
    var nombre = req.session.nombre; 
     console.log(sesion,nombre);
    res.render("categorias",{sesion,nombre});
}



/* viaje en linea */
export const viajeEnLinea = (req, res)=>{
    res.render("viajeEnLinea");
}


/* Prototipado productos */
export const prototipadoProductos = (req, res)=>{
    res.render("prototipadoProductos");
}




/* optimizacion de Productos  */
export const optimizacionProductos = (req, res)=>{
    res.render("optimizacionProductos");
}

/* pensamiento digital */
export const pensamientoDigital = (req, res)=>{
    res.render("pensamientoDigital");
}



/* habilidades */
export const habilidades = (req, res)=>{
    res.render("habilidades");
}

/* 
export const editTask = async(req,res)=>{
    const id = req.params.id;
    try{
        const task = await modelo.findById(id).lean()
        res.render("edit",{task})
    }catch(e){
        console.log(e)
    }

}

export const updateTask = async(req,res)=>{
    const {id} = req.params;
    console.log(id)
    try{
        const taskUpdate = await modelo.findByIdAndUpdate(id,req.body).lean()
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
        const taskDelete = await modelo.findByIdAndDelete(id)
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
    const task = await modelo.findById(id);
    console.log(task);
    task.done = !task.done;

    await task.save()
    res.redirect("/");
}  */