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

    createTask({nome, descricao}: ICriarTarefa): ITarefa{

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

    getTasks(){
        return tarefas;
    }

    getTask(id: number){
        for(let i: number = 0; i < tarefas.length; i++){
            if(tarefas[i]?.id == id){
                return tarefas[i];
            }
        }
        throw new Error ('Tarefa não encontrada.');
    }

    editTask(id: number, {nome, descricao}: ICriarTarefa){
        for(let i: number = 0; i < tarefas.length; i++){
            if(tarefas[i]?.id == id){
                tarefas[i]!.nome = nome;
                tarefas[i]!.descricao = descricao;
                return tarefas[i];
            }
        }
        throw new Error ('Tarefa não encontrada.');
    }

    removeTask(id: number){
        for(let i: number = 0; i < tarefas.length; i++){
            if(tarefas[i]?.id == id){
                tarefas.splice(i, 1);
                return;
            }
        }

        throw new Error ('Tarefa não encontrada.');
    }

}

export {TarefaService};
