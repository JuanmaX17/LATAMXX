import {Router} from "express";

import {
    renderTasks,
    createTask,
    editTask,
    updateTask,
    deleteTask,
    toggleTask
} from "../controllers/tasks.controller"

const router = Router();

router.get("/",renderTasks)

router.post("/tasks/add",createTask)

router.get("/task/:id/edit",editTask)

router.put("/task/:id/edit",updateTask)

router.delete("/delete/task/:id",deleteTask)

router.get("/task/:id/toggleDone",toggleTask)  

export default router