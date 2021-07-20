import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

import { useState } from 'react';

import './Navegador.css';

import $ from 'jquery';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Link } from 'react-router-dom';

export default function Navegador() {



  const menuDes = () => {
    $('nav ul').toggle('slow')

  };


  return (

    <div className='container-fluid'>

      <div className='bg-dark centrar'>
        <h1>Federico Celiz</h1>
      </div>



      <nav className='a'>

        <div className="hide">

          <div className='container-fluid'>


            <div className="row">

              <div className='col-1'>
                <FontAwesomeIcon icon={faBars} className='ico' onClick={menuDes} ></FontAwesomeIcon>

              </div>

              <div className='col-2'>
                <h5>Menu</h5>
              </div>



            </div>

          </div>
        </div>

        <ul className='bg-primary '>

          <li><Link className='navegar' to="/">Datos Pesonales</Link></li>
          <li><Link className='navegar' to="/estudios">Estudios</Link></li>
          <li><Link className='navegar' to="/conocimientos">Conocimientos</Link></li>
          <li><Link className='navegar' to="/herramientas">Herramientas</Link></li>
          <li><Link className='navegar' to="/proyectos">Proyectos</Link></li>
          <li><Link className='navegar' to="/contactos">Contacto</Link></li>

        </ul>




      </nav>








    </div>

  )

}