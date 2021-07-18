import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navegador from './componentes/Navegador';
import Inicio from './inicio/inicio'
import Datos from './Datos Personales/Datos';
import Conocimientos from './Conocimientos/Conocimientos';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';

function App() {
  return (
   
  <BrowserRouter>
    <div className="container-fluid">

    


     <Navegador></Navegador>
      
      
    <Switch>
     <Route exact path="/conocimientos">
      <Conocimientos ></Conocimientos>

     </Route>

     <Route exact path="/datos"> 

     </Route>

     <Route exact path="/"> 
      <Inicio></Inicio>
     </Route>

    </Switch>


      
    
   
    </div>
  </BrowserRouter>
   
  );
}

export default App;
