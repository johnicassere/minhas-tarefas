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
            prioridade: enums.Prioridade.NOMARL,
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
        },
        cadastar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) =>{
            const tarefaJaExiste = state.itens.find(tarefa => tarefa.titulo.toLocaleLowerCase() === action.payload.titulo.toLocaleLowerCase())
            if(tarefaJaExiste){
                alert("Já existe uma tarefa com esse nome")
            } else {
                const ultimaTarfa = state.itens[state.itens.length -1]

                const tarefaNova = {
                    ...action.payload,
                    id: ultimaTarfa ? ultimaTarfa.id +1 : 1
                }
                state.itens.unshift(tarefaNova)
            }
        },
        alteraStatus: (state, action: PayloadAction<{id: number; finalizado: boolean}>) =>{
            const indexDaTarefa = state.itens.findIndex(
                (t) => t.id == action.payload.id
            )
            if(indexDaTarefa >= 0){
                state.itens[indexDaTarefa].status = action.payload.finalizado
                ? enums.Status.CONCLUIDA
                : enums.Status.PENDENTE
            }
        }
    }
})

export const { remover, editar, cadastar, alteraStatus } = tarefasSlice.actions
export default tarefasSlice.reducer