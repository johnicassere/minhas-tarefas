import StiloGlobal, { Container } from "./styles"
import BarraLateral from "./containers/BarraLateral"
import ListaDeTarefas from "./containers/ListaDeTarefas"
import { Provider } from "react-redux";
import store from './store'



function App() {
  return (
   <Provider store={store}>
   <StiloGlobal/>
   <Container>
    <BarraLateral/>
    <ListaDeTarefas/>
   </Container>
   </Provider>
  );
}

export default App;
