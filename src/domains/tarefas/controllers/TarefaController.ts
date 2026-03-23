import { Request, Response } from 'express';
import { TarefaService } from '../services/TarefaService'; 

class TarefaController {
  
  createTask(req: Request, res: Response) {
    try {
      const { nome, descricao } = req.body;
      
      const service = new TarefaService();
      const tarefa = service.createTask({ nome, descricao });
      
      return res.status(201).json(tarefa);
      
    } catch (error) {
      return res.status(400).json({ erro: (error as Error).message });
    }
  }

  getTasks(req: Request, res: Response) {
    const service = new TarefaService();
    const tarefas = service.getTasks();
    return res.status(200).json(tarefas);
  }

  getTask(req: Request, res: Response){
    try{
        const id = Number(req.params.id);
        const service = new TarefaService();
        const tarefa = service.getTask(id);
        return res.status(200).json(tarefa);
    } catch (error){
        return res.status(404).json({ erro: (error as Error).message });
    }
  }

  editTask(req: Request, res: Response){
    try{
        const id = Number(req.params.id);
        const { nome, descricao } = req.body;
        const service = new TarefaService();
        const tarefa = service.editTask(id, { nome, descricao });
        return res.status(200).json(tarefa);
    } catch (error){
        return res.status(404).json({ erro: (error as Error).message });
    }
  }

  removeTask(req: Request, res: Response){
      try {
        const id = Number(req.params.id);
        const service = new TarefaService();
        service.removeTask(id);
        return res.status(204).send();
      } catch (error) {
        return res.status(404).json({ erro: (error as Error).message });
      }
  }
}

export { TarefaController };
