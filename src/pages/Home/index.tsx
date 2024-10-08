import BotaoAdicionar from "../../componentes/BotaoAdicionar";
import BarraLateral from "../../containers/BarraLateral";
import ListaDeTarefas from "../../containers/ListaDeTarefas";

const Home = () => (
    <>
        <BarraLateral mostrarFiltro/>
        <ListaDeTarefas/>
        <BotaoAdicionar/>
    </>
)

export default Home