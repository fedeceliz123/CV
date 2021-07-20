import './Contacto.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { WhatsApp, MailOutline, LinkedIn, GitHub } from '@material-ui/icons';

export default function Contacto() {

    return (

        <div className='contacto bg-dark'>
            <h3 className='textcon'><WhatsApp></WhatsApp><a href="http://wa.me/5493513985911"> 3513985911</a> </h3>
            <h3 className='textcon'> <MailOutline></MailOutline><a href="http://www.hotmail.com"> fede_celiz92@hotmail.com</a></h3>
            <h3 className='textcon'><LinkedIn></LinkedIn><a href="http://www.linkedin.com/in/federico-celiz-39418a1b1">  www.linkedin.com/in/federico-celiz-39418a1b1</a></h3>
            <h3 className='textcon'><GitHub></GitHub><a href="https://github.com/fedeceliz123">  https://github.com/fedeceliz123</a></h3>

        </div>

    )

}