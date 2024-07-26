import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
    itens: Tarefa[]
}

const initialState: TarefasState ={
    itens: [
        {
            id: 1,
            descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            prioridade: enums.Prioridade.IMPORTANTE,
            status: enums.Status.CONCLUIDA,
            titulo: 'Estudar Java',
        },
        {
            id: 2,
            descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            prioridade: enums.Prioridade.IMPORTANTE,
            status: enums.Status.CONCLUIDA,
            titulo: 'Estudar JavaScript',
        },
        {
            id: 3,
            descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            prioridade: enums.Prioridade.IMPORTANTE,
            status: enums.Status.CONCLUIDA,
            titulo: 'Estudar BootStrap',
        },
    ]
}

const tarefasSlice = createSlice({
    name: 'tarefas',
    initialState, 
    reducers: {
        remover: (state, action: PayloadAction<number>) => {
            state.itens = [
                ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
            ]
        },
        editar: (state, action: PayloadAction<Tarefa>)=>{
            const indexDaTarefa = state.itens.findIndex(
                (t) => t.id == action.payload.id
            )
                if(indexDaTarefa >= 0){
                    state.itens[indexDaTarefa] = action.payload
                }
        }
    }
})

export const { remover, editar } = tarefasSlice.actions
export default tarefasSlice.reducer