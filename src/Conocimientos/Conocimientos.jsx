import './Conocimientos.css';

import { } from '@fortawesome/free-solid-svg-icons';

import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap'

import $ from 'jquery';
import axios from 'axios';

import React, { useState, useEffect } from 'react';

import GraficoBarra from './GraficoBarra';
import GraficosC from './GraficosC';
import GraficosH from './GraficosH';
import Graficoscss from './Graficoscss';


export default function Conocimientos() {
    var move = 0;

    const [mod1, setMod1] = useState(false)
    const [mod2, setMod2] = useState(false)
    const [mod3, setMod3] = useState(false)
    const [mod4, setMod4] = useState(false)
    const [mod5, setMod5] = useState(false)
    const [mod6, setMod6] = useState(false)
    const [mod7, setMod7] = useState(false)


    const cerrarModal1 = () => {
        setMod1(false);

        document.getElementById("imagen1").style.marginLeft = "0px";
        document.getElementById("imagen1").style.transition = "4s"

        $('.css').toggle('slow') && $('.html').toggle('slow') && $('.c').toggle('slow')

        move = 0;
    }

    const cerrarModal2 = () => {
        setMod2(false)

        document.getElementById("imagen2").style.marginLeft = "0px";
        document.getElementById("imagen2").style.transition = "4s"

        $('.css').toggle('slow') && $('.html').toggle('slow') && $('.js').toggle('slow')

        move = 0;

    }

    const cerrarModal3 = () => {

        setMod3(false)

        document.getElementById("imagen3").style.marginLeft = "0px";
        document.getElementById("imagen3").style.transition = "4s"

        $('.css').toggle('slow') && $('.c').toggle('slow') && $('.js').toggle('slow')

        move = 0;


    }

    const cerrarModal4 = () => {

        setMod4(false)
        document.getElementById("imagen4").style.marginLeft = "0px";
        document.getElementById("imagen4").style.transition = "4s"

        $('.html').toggle('slow') && $('.c').toggle('slow') && $('.js').toggle('slow')

        move = 0;

    }




    const mover = () => {





        if (move === 0) {



            document.getElementById("imagen1").style.marginLeft = "90%";
            document.getElementById("imagen1").style.transition = "3s"

            $('.css').toggle('slow') && $('.html').toggle('slow') && $('.c').toggle('slow')

            move++;
            setMod1(true);

        }



    }



    const mover2 = () => {





        if (document.getElementById("imagen2").style.marginLeft == "0px" || move === 0) {


            let ancho = (document.getElementById("columna").style.width);
            document.getElementById("imagen2").style.marginLeft = "90%";
            document.getElementById("imagen2").style.transition = "3s"

            $('.css').toggle('slow') && $('.html').toggle('slow') && $('.js').toggle('slow')


            move++;

            setMod2(true)


        }

    }
    const mover3 = () => {





        if (document.getElementById("imagen3").style.marginLeft == "0px" || move === 0) {


            let ancho = (document.getElementById("columna").style.width);
            document.getElementById("imagen3").style.marginLeft = "90%";
            document.getElementById("imagen3").style.transition = "3s"

            $('.css').toggle('slow') && $('.c').toggle('slow') && $('.js').toggle('slow')


            move++;
            setMod3(true)


        }

    }

    const mover4 = () => {





        if (document.getElementById("imagen4").style.marginLeft == "0px" || move === 0) {


            let ancho = (document.getElementById("columna").style.width);
            document.getElementById("imagen4").style.marginLeft = "90%";
            document.getElementById("imagen4").style.transition = "3s"

            $('.html').toggle('slow') && $('.c').toggle('slow') && $('.js').toggle('slow')


            move++;

            setMod4(true)

        }

    }

    ///  base de datos 

    const bd1 = () => {

        if (move === 0) {
            document.getElementById("sqls").style.marginRight = "98%"
            document.getElementById("sqls").style.transition = "3s"
            setMod5(true)

            $('.msql').toggle('slow') && $('.oracle').toggle('slow')
        }


    }

    const bd2 = () => {

        if (move === 0) {
            document.getElementById("msql").style.marginRight = "98%"
            document.getElementById("msql").style.transition = "3s"
            setMod6(true)

            $('.sqls').toggle('slow') && $('.oracle').toggle('slow')
        }


    }
    const bd3 = () => {

        if (move === 0) {
            document.getElementById("oracle").style.marginRight = "98%"
            document.getElementById("oracle").style.transition = "3s"
            setMod7(true)
            $('.sqls').toggle('slow') && $('.msql').toggle('slow')
        }


    }

    // modal bd 

    const cerrarModal5 = () => {

        setMod5(false)
        document.getElementById("sqls").style.marginRight = "0%";
        document.getElementById("sqls").style.transition = "4s"

        $('.msql').toggle('slow') && $('.oracle').toggle('slow')

        move = 0;

    }
    const cerrarModal6 = () => {

        setMod6(false)
        document.getElementById("msql").style.marginRight = "0%";
        document.getElementById("msql").style.transition = "4s"

        $('.sqls').toggle('slow') && $('.oracle').toggle('slow')

        move = 0;

    }
    const cerrarModal7 = () => {

        setMod7(false)
        document.getElementById("oracle").style.marginRight = "0%";
        document.getElementById("oracle").style.transition = "4s"

        $('.sqls').toggle('slow') && $('.msql').toggle('slow')

        move = 0;

    }






    return (


        <div className='container-fluid contenedor'>

            <div className='row justify-content-center' >

                <div id="columna" className="col-md-5 bg-dark prog ">
                    <h2>Programacion Web</h2>




                    <div className='js'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt='JS' onClick={mover} id='imagen1' />
                        <h3>JavaScript</h3>
                    </div>
                    <div className='c' >
                        <img src="https://img2.freepng.es/20180328/dcw/kisspng-net-framework-c-net-core-software-framework-mon-studio-5abb543b9c9cc0.0743300915222262356415.jpg" alt='C#' onClick={mover2} id='imagen2' />
                        <h3>C#</h3>
                    </div>
                    <div className='html' >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/230px-HTML5_logo_and_wordmark.svg.png" alt='HTML' onClick={mover3} id='imagen3' />
                        <h3>Html</h3>
                    </div>
                    <div className='css'>
                        <img src="https://www.jasoft.org/Blog/image.axd?picture=/2017/css3logo.png" alt='CSS' onClick={mover4} id='imagen4' />
                        <h3>CSS</h3>
                    </div>




                </div>


                <div className="col-md-5 bg-dark prog">
                    <h2>Base de datos</h2>


                    <div className='sqls margen'>
                        <img src="https://w7.pngwing.com/pngs/244/430/png-transparent-microsoft-sql-server-sql-server-management-studio-database-server-microsoft-angle-text-triangle.png" alt='SQL' id='sqls' onClick={bd1} />
                        <h3>SQL Server</h3>
                    </div>
                    <div className='msql margen' >
                        <img src="https://codigosql.top/wp-content/uploads/2020/02/base-de-datos-en-mysql-724x1024.png" alt='MySQL' id='msql' onClick={bd2} />
                        <h3>MySQL</h3>
                    </div>
                    <div className='oracle margen' >
                        <img src="data:image/png;base64,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" alt='Oracle' id='oracle' onClick={bd3} />
                        <h3>Oracle</h3>
                    </div>



                </div>

            </div>

            <Modal isOpen={mod1} className="modales" >
                <ModalHeader>
                    <h1 className="jst">Javascript <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt='JS' onClick={mover} id='imagen1' /></h1>
                </ModalHeader>
                <ModalBody>
                    <GraficoBarra></GraficoBarra>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={cerrarModal1}>Cerrar</Button>
                </ModalFooter>
            </Modal>


            <Modal isOpen={mod2} className="modales">
                <ModalHeader>
                    <h1 className="jst">C#  <img src="https://img2.freepng.es/20180328/dcw/kisspng-net-framework-c-net-core-software-framework-mon-studio-5abb543b9c9cc0.0743300915222262356415.jpg" alt='C#' onClick={mover2} id='imagen2' /></h1>
                </ModalHeader>
                <ModalBody>
                    <GraficosC></GraficosC>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={cerrarModal2}>Cerrar</Button>
                </ModalFooter>
            </Modal>


            <Modal isOpen={mod3} className="modales">
                <ModalHeader>
                    <h1 className="jst">HTML  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/230px-HTML5_logo_and_wordmark.svg.png" alt='HTML' onClick={mover3} id='imagen3' /></h1>
                </ModalHeader>
                <ModalBody>
                    <GraficosH></GraficosH>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={cerrarModal3}>Cerrar</Button>
                </ModalFooter>
            </Modal>


            <Modal isOpen={mod4} className="modales">
                <ModalHeader>
                    <h1 className="jst">CSS  <img src="https://www.jasoft.org/Blog/image.axd?picture=/2017/css3logo.png" alt='CSS' onClick={mover4} id='imagen4' /></h1>
                </ModalHeader>
                <ModalBody>
                    <Graficoscss></Graficoscss>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={cerrarModal4}>Cerrar</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={mod5} className="modales">
                <ModalHeader>
                    <h1 className="jst">SQL Server <img src="https://w7.pngwing.com/pngs/244/430/png-transparent-microsoft-sql-server-sql-server-management-studio-database-server-microsoft-angle-text-triangle.png" alt='SQL Server' /></h1>
                </ModalHeader>
                <ModalBody>
                    Diseño de basa de datos, relaciones entre tablas con primary key y foreign key.<br />
                    Consultas SQL, vistas.<br />
                    Importación y exportación de base de datos.<br />
                    Generar script de base de datos.<br />

                </ModalBody>
                <ModalFooter>
                    <Button onClick={cerrarModal5}>Cerrar</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={mod6} className="modales">
                <ModalHeader>
                    <h1 className="jst">MySQL  <img src="https://codigosql.top/wp-content/uploads/2020/02/base-de-datos-en-mysql-724x1024.png" alt='MySQL' /></h1>
                </ModalHeader>
                <ModalBody>
                    Diseño de basa de datos, relaciones entre tablas con primary key y foreign key.<br />
                    Consultas SQL, vistas.
                </ModalBody>
                <ModalFooter>
                    <Button onClick={cerrarModal6}>Cerrar</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={mod7} className="modales">
                <ModalHeader>
                    <h1 className="jst">Oracle  <img src="data:image/png;base64,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" alt='Oracle' /></h1>
                </ModalHeader>
                <ModalBody>
                    Diseño de basa de datos, relaciones entre tablas con primary key y foreign key.<br />
                    Consultas SQL, vistas.<br />
                    Importación y exportación de base de datos.<br />
                    Generar script de base de datos.<br />

                </ModalBody>
                <ModalFooter>
                    <Button onClick={cerrarModal7}>Cerrar</Button>
                </ModalFooter>
            </Modal>

        </div>


    )


}