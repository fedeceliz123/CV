import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navegador from './componentes/Navegador';
import Inicio from './inicio/inicio'
import Datos from './Datos Personales/Datos';
import Conocimientos from './Conocimientos/Conocimientos';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Estudios from './Estudios/Estudios';
import Herramientas from './Herramientas/Herramientas';
import Proyectos from './Proyectos/Proyectos';
import Contacto from './Contacto/Contacto';

function App() {
  return (

    <BrowserRouter>
      <div className="container-fluid">




        <Navegador></Navegador>


        <Switch>
          <Route exact path="/conocimientos">
            <Conocimientos ></Conocimientos>

          </Route>



          <Route exact path="/">

            <Inicio></Inicio>


          </Route>

          <Route exact path="/estudios">

            <Estudios></Estudios>


          </Route>

          <Route exact path="/herramientas">


            <Herramientas></Herramientas>

          </Route>
          <Route exact path="/proyectos">


            <Proyectos></Proyectos>

          </Route>

          <Route exact path="/contactos">


            <Contacto></Contacto>

          </Route>

        </Switch>





      </div>
    </BrowserRouter>

  );
}

export default App;
