import './Conocimientos.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
import JS from '../image/js.png';
import html from '../image/html.png';
import css from '../image/css.png'

import $ from 'jquery';
import axios from 'axios';

import React,{useState, useEffect} from 'react';


export default function  Conocimientos() {
    var move=0;
        const mover  =()=>{

            
         
            

            if(  move===0 )
            {
                
                
              
                document.getElementById("imagen1").style.marginLeft="90%";
                document.getElementById("imagen1").style.transition="3s"
                
                $('.css').toggle('slow') && $('.html').toggle('slow')&&$('.c').toggle('slow')
               
                move++;
                
                
            } 

           else
            {

                document.getElementById("imagen1").style.marginLeft="0px";
                document.getElementById("imagen1").style.transition="4s"
               
                $('.css').toggle('slow')&& $('.html').toggle('slow')&&$('.c').toggle('slow')
               
                move=0;
               
            }


        }



        const mover2  =()=>{

            
          
            

            if(document.getElementById("imagen2").style.marginLeft=="0px" || move===0 )
            {
                
                
                let ancho = (document.getElementById("columna").style.width);
                document.getElementById("imagen2").style.marginLeft="90%";
                document.getElementById("imagen2").style.transition="3s"
                
                $('.css').toggle('slow') && $('.html').toggle('slow')&&$('.js').toggle('slow')
               

                move++;
                
                
            } else
            {

                document.getElementById("imagen2").style.marginLeft="0px";
                document.getElementById("imagen2").style.transition="4s"
               
                $('.css').toggle('slow')&& $('.html').toggle('slow')&&$('.js').toggle('slow')
                 
              move=0;
            }


        }
        const mover3  =()=>{

            
          
            

            if(document.getElementById("imagen3").style.marginLeft=="0px" || move===0 )
            {
                
                
                let ancho = (document.getElementById("columna").style.width);
                document.getElementById("imagen3").style.marginLeft="90%";
                document.getElementById("imagen3").style.transition="3s"
                
                $('.css').toggle('slow') && $('.c').toggle('slow')&&$('.js').toggle('slow')
               

                move++;
                
                
            } else
            {

                document.getElementById("imagen3").style.marginLeft="0px";
                document.getElementById("imagen3").style.transition="4s"
               
                $('.css').toggle('slow')&& $('.c').toggle('slow')&&$('.js').toggle('slow')
                 
              move=0;
            }


        }

        const mover4  =()=>{

            
          
            

            if(document.getElementById("imagen4").style.marginLeft=="0px" || move===0 )
            {
                
                
                let ancho = (document.getElementById("columna").style.width);
                document.getElementById("imagen4").style.marginLeft="90%";
                document.getElementById("imagen4").style.transition="3s"
                
                $('.html').toggle('slow') && $('.c').toggle('slow')&&$('.js').toggle('slow')
               

                move++;
                
                
            } else
            {

                document.getElementById("imagen4").style.marginLeft="0px";
                document.getElementById("imagen4").style.transition="4s"
               
                $('.html').toggle('slow')&& $('.c').toggle('slow')&&$('.js').toggle('slow')
                 
              move=0;
            }


        }

///  peticiones 
     

    return(

            
         <div className='container-fluid'>

             <div className='row' >

             <div id="columna" className="col-md-6 bg-dark prog ">
                <h2>Programacion</h2>
                
                    
                    
                       
                        <div className ='js'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt='JS' onClick={mover} id='imagen1'  />
                            <h3>JavaScript</h3>
                        </div>
                        <div className ='c' >
                            <img src="https://img2.freepng.es/20180328/dcw/kisspng-net-framework-c-net-core-software-framework-mon-studio-5abb543b9c9cc0.0743300915222262356415.jpg" alt='C#' onClick={mover2} id='imagen2' />
                            <h3>C#</h3>
                        </div>
                        <div className ='html' >
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/230px-HTML5_logo_and_wordmark.svg.png" alt='HTML' onClick={mover3} id='imagen3'  />
                            <h3>Html</h3>
                        </div>
                        <div className ='css'>
                            <img src="https://www.jasoft.org/Blog/image.axd?picture=/2017/css3logo.png" alt='CSS' onClick={mover4} id='imagen4'/>
                            <h3>CSS</h3>
                        </div>
                       
                    
                    
                
             </div>

             <div className="col-md-6  ">
                <h2>Base de datos</h2>
             </div>

            </div>
        </div>
            

    )


}