import React from "react";
import {Bar}from 'react-chartjs-2'

export default function GraficosH(){

    const dato={
        labels:["Nav","Header","Footer","Body","Link"],
        datasets:[{
            label:['Conocimientos HTML5'],
            backgroundColor:'#FFA200',
            borderColor:'black',
            borderWidth:3,
            hoverBackgroundColor:'white',
            hoverBorderColor:'grey',
           data:[90,90,70,80,70]
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