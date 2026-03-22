import express from 'express';
import { tarefasRoutes } from './routes/tarefa.routes';


const app = express();
const PORTA = 3333;

app.use(express.json()); 

app.use('/tarefas', tarefasRoutes)

app.listen(PORTA, () => {
  console.log(`🚀 Servidor rodando na porta ${PORTA}`);
});