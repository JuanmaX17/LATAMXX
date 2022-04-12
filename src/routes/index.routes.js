import {Router} from "express";
import { route } from "express/lib/router";

import {
    inicio,
    registroPost,
    registroGet,
    login,
    loginVista,
    curso,
    logout,
    viajeEnLinea,
    prototipadoProductos,
    optimizacionProductos,
    pensamientoDigital,
    habilidades,
    bootcamps,
    hackathons,
    tours,
    beca,
    cursosHomologablesPersonas,
    cursosNoHomologablesPersonas,
    cursosHomologablesEmpresas,
    cursosNoHomologablesEmpresas,
    tutoriales,
    aprendizDigital,
    administracionEquipos
    
    
/*     editTask,
    updateTask,
    deleteTask,
    toggleTask */
} from "../controllers/tasks.controller"

const router = Router();

router.get("/",inicio)
router.get("/designClient",curso);

router.get("/viajeEnLinea",viajeEnLinea);

router.get("/registro",registroGet)

router.post("/registro",registroPost)



router.get("/login",loginVista)
router.post("/login",login)

router.get("/logout",logout);

router.get("/prototipadoProductos",prototipadoProductos)

router.get("/optimizacionProductos",optimizacionProductos);

router.get("/pensamientoDigital",pensamientoDigital);

router.get("/habilidades",habilidades);

router.get("/bootcamps",bootcamps)

router.get("/hackathons",hackathons)

router.get("/tours",tours)

router.post("/beca",beca)

router.get("/cursosHomologablesPersonas",cursosHomologablesPersonas)

router.get("/cursosNoHomologablesPersonas",cursosNoHomologablesPersonas)

router.get("/cursosHomologablesEmpresas",cursosHomologablesEmpresas)

router.get("/cursosNoHomologablesEmpresas",cursosNoHomologablesEmpresas)

router.get("/tutoriales",tutoriales)

router.get("/aprendizDigital",aprendizDigital);
router.get("/administracionEquipos",administracionEquipos);

/* 
router.get("/task/:id/edit",editTask)

router.put("/task/:id/edit",updateTask)

router.delete("/delete/task/:id",deleteTask)

router.get("/task/:id/toggleDone",toggleTask)   */

export default router