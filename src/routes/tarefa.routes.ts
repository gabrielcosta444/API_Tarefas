import { Router } from "express";
import { TarefaController } from "../domains/tarefas/controllers/TarefaController";

const tarefasRoutes = Router();
const controller = new TarefaController;

tarefasRoutes.post('/tasks', controller.create);


tarefasRoutes.get('/tasks', controller.list);

export {tarefasRoutes};
