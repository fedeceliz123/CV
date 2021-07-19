import './inicio.css';
import $ from 'jquery';

export default function Inicio() {

    const Ver = () => {
        { $('.tres').toggle('slow') }




    };

    const Ver2 = () => {
        { $('img').toggle('slow') }




    };



    return (





        <div >

            <div className='centrara'>

                <div>

                    <img src="https://scontent.fcor2-1.fna.fbcdn.net/v/t1.6435-9/82408933_10157986897170127_1153225871759245312_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=nM6r1noOEdIAX-Vd27F&_nc_ht=scontent.fcor2-1.fna&oh=33feb5280ccc22ee83cf09851c846da1&oe=60FB4F21" alt="img" onClick={Ver} className='imagen' />

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