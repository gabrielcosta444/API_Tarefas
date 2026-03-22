import { Request, Response } from 'express';
import { TarefaService } from '../services/TarefaService'; 

class TarefaController {
  
  create(req: Request, res: Response) {
    try {
      const { nome, descricao } = req.body;
      
      const service = new TarefaService();
      const tarefa = service.create({ nome, descricao });
      
      return res.status(201).json(tarefa);
      
    } catch (error) {
      return res.status(400).json({ erro: Error });
    }
  }
  
  // Um método para gerenciar a rota de LISTAR
  list(req: Request, res: Response) {
    const service = new TarefaService();
    const tarefas = service.list();
    return res.status(200).json(tarefas);
  }
}

export { TarefaController };