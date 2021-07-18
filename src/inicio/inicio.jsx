import './inicio.css';
import $ from 'jquery';

export default function  Inicio() {

    const Ver =()=>{
        {$('.tres').toggle('slow')}
        
    


    };

    const Ver2 =()=>{
        {$('img').toggle('slow')}
        
    


    };
    


    return(

        
   


       <div >

       <div className='centrara'>
      
           <div>

            <img src="https://ichef.bbci.co.uk/news/800/cpsprodpb/046C/production/_118123110_ad83f8c5-2a46-4faa-a42d-fef5cd060d23.jpg" alt="img"  onClick={Ver}/>
            
           </div>
           


        </div>
        <div className='dos'>
            <div className='tres' onClick={Ver2}>

              <h6>Developer Trainee</h6>
            </div>
        </div>

       </div>

    )
    
}