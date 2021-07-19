import React from "react";
import {Bar}from 'react-chartjs-2'

export default function Graficoscss(){

    const dato={
        labels:["Display","Background","Border","Animacion","Tranciciones","Media"],
        datasets:[{
            label:['Conocimientos CSS'],
            backgroundColor:'#87CEEB',
            borderColor:'black',
            borderWidth:3,
            hoverBackgroundColor:'white',
            hoverBorderColor:'grey',
           data:[60,75,70,40,50,50]
        }]
    }
    
    const opciones={
        maintainAspectRatio:false,
        responsive:true
    }


    return(
        <div style={{height:'50vh' , width:'100%'}}>
        <Bar  data={dato} options={opciones}></Bar>

</div>
    )


}