import React from "react";
import {Bar}from 'react-chartjs-2'

export default function GraficosC(){

    const dato={
        labels:["Array","Bucles","POO","Clases","Variables"],
        datasets:[{
            label:['Conocimientos C#'],
            backgroundColor:'#8F00FF',
            borderColor:'black',
            borderWidth:3,
            hoverBackgroundColor:'blue',
            hoverBorderColor:'grey',
           data:[100,90,70,80,100]
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