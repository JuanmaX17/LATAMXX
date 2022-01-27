import modelo from "../models/Task"

export const renderTasks = async(req,res)=>{
    const tasks = await modelo.find().lean();
    res.render("index",{tasks: tasks});
}

export const createTask = async(req,res)=>{
    try{
        const task = modelo(req.body);
        const taskSave = await task.save();
        console.log(task)
        res.redirect("/");
    }catch(e){
        console.log("error",e)
    }
}

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
}