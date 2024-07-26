import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../componentes/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
    const dispatch = useDispatch()
    const { termo } = useSelector((state: RootReducer) => state.filtro)

    return (
        <S.Aside>
            <div>
                <S.Campo 
                type="text" 
                placeholder="Buscar" 
                value={termo}
                onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
                 />
            <S.Filtros>
                <FiltroCard legenda='pendentes' contador={1}/>
                <FiltroCard legenda='concluidas' contador={2}/>
                <FiltroCard legenda='urgentes' contador={3}/>
                <FiltroCard legenda='importatntes' contador={4}/>
                <FiltroCard legenda='nomal' contador={5}/>
                <FiltroCard ativo legenda='todas' contador={10}/>
            </S.Filtros>
            </div>
        </S.Aside>
    )
}

export default BarraLateral