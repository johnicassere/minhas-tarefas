import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import StiloGlobal, { Container } from "./styles"
import store from './store'
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";



function App() {
  const rotas = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/novo',
      element: <Cadastro/>
    }
  ])
  return (
   <Provider store={store}>
   <StiloGlobal/>
   <Container>
    <RouterProvider router={rotas}/>
   </Container>
   </Provider>
  );
}

export default App;
