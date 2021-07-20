import React from "react";
import { Bar } from 'react-chartjs-2'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios"
import { useState, useEffect } from "react"
import './Estudios.css';

export default function Estudios() {

    const UrlPet = "https://localhost:44365/api/estudios"

    const [data, setData] = useState([]);


    const peticionGet = async () => {
        await axios.get(UrlPet)

            .then(response => {
                setData(response.data);

            }).catch(error => {
                console.log(error);
            })
    }


    useEffect(() => {
        peticionGet();
    }, [])

    //datos para el grafico

    const nomMateria = [];
    const calificacion = [];

    data.map(materias => (
        nomMateria.push(materias.materia),
        calificacion.push(parseInt(materias.calificacion))
    ))

    /// Grafico

    const dato = {
        labels: nomMateria,
        datasets: [{
            label: ['Materias Aprobadas'],
            backgroundColor: 'blue',
            borderColor: 'grey',
            borderWidth: 3,
            hoverBackgroundColor: 'black',
            hoverBorderColor: 'grey',
            data: calificacion
        }]
    }

    const opciones = {
        maintainAspectRatio: false,
        responsive: true
    }


    // promedio 


    var contador = 0;
    var acumulador = 0;
    for (var i = 0; i < calificacion.length; i++) {
        acumulador = acumulador + calificacion[i];
        contador++;
    }

    var matriasFaltantes = 37 - contador;


    return (
        <div>

            <div className='estudio'>

                <h5 className='carrera'>Analista en sistemas</h5>
                <h5 className='prom'>Promedio: {(acumulador / contador).toFixed(2)} Cursando el 4to semestre</h5>
                <h5 className='prom'>Materias cursadas: {contador}</h5>
                <h5 className='prom'>Materias faltantes: {matriasFaltantes}</h5>

                <Bar data={dato} options={opciones} className='grafico'></Bar>



            </div>

        </div>


    )

}



