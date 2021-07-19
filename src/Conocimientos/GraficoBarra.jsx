import React from "react";
import {Bar}from 'react-chartjs-2'

export default function GraficoBarra(){

    const dato={
        labels:["Array","Bucles","POO","Clases","Variables"],
        datasets:[{
            label:['Conocimientos javacript'],
            backgroundColor:'yellow',
            borderColor:'black',
            borderWidth:3,
            hoverBackgroundColor:'black',
            hoverBorderColor:'grey',
           data:[80,70,60,50,100]
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