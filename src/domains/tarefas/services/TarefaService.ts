interface ICriarTarefa{
    nome: string;
    descricao: string;
}

interface ITarefa {
  id: number;
  nome: string;
  descricao: string;
  concluida: boolean;
}

const tarefas: ITarefa[] = [];



class TarefaService{

    create({nome, descricao}: ICriarTarefa): ITarefa{

        if(!nome){
            throw new Error ('Nome da tarefa é obrigatório.');
        }

        const novaTarefa: ITarefa = {
            nome,
            descricao,
            id: Math.random(),
            concluida: false
        }

        tarefas.push(novaTarefa);

        return novaTarefa;
    }

    list(){
        return tarefas;
    }
}

export {TarefaService};