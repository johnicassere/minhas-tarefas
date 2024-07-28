import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiltroCard from '../../componentes/FiltroCard'
import * as S from './styles'
import { Botao, Campo } from '../../styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Tarefa'

type Props = {
    mostrarFiltro: boolean
}

const BarraLateral = ({ mostrarFiltro }: Props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { termo } = useSelector((state: RootReducer) => state.filtro)

    return (
        <S.Aside>
            <div>
                {mostrarFiltro ? (
                <>
                <Campo 
                type="text" 
                placeholder="Buscar" 
                value={termo}
                onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
                 />
            <S.Filtros>
                <FiltroCard valor={enums.Status.PENDENTE} criterio='status' legenda='pendentes'/>
                <FiltroCard valor={enums.Status.CONCLUIDA} criterio='status' legenda='concluidas'/>
                <FiltroCard valor={enums.Prioridade.URGENTE} criterio='prioridade' legenda='urgentes'/>
                <FiltroCard valor={enums.Prioridade.IMPORTANTE} criterio='prioridade' legenda='importantes'/>
                <FiltroCard valor={enums.Prioridade.NOMARL} criterio='prioridade' legenda='nomal'/>
                <FiltroCard criterio='todas' legenda='todas'/>
            </S.Filtros>
            </>
            ) : (
                <Botao onClick={() => navigate('/')}>
                    Voltar a Lista de Tarefas
                </Botao>
            )}
        </div>
        </S.Aside>
    )
}

export default BarraLateral