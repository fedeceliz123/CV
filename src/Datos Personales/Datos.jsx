import './Datos.css';

export default function Datos() {
    
    return(

        <div className='container-fluid'>

            <div className='row tabla' >
                    <div className="col-md-3  personla">
                        <h2>Datos</h2>
                            <p>Nombre: Federico Elvio Celiz</p>
                            <p>Fecha de Nacimiento:15/06/92</p>
                            <p>Direccion: Cangaye 80</p>
                            <p>Pais: Argentina</p>
                            <p>Localidad: Córdoba</p>

                    </div>

                    <div className="col-md-3  personla">
                        <h2>Intereces</h2>
                        <p>*FrontEnd:</p>
                        <p>-React js, Angular, Vue.js</p>
                        <p>*BackEnd</p>
                        <p>-Asp.net, Node.js</p>
                        <p>*Base de datos</p>
                        <p>-SQL Server, MySQL, Oracle</p>
                    </div>

                    <div className="col-md-3  personla">
                            <h2>Pesentacion</h2>

                            <p>Soy un presona con ganas de superarce cada dia un poco mas, soy proactivo, me gusta tener metas y objetivos para superame</p>


                    </div>

            </div>

        </div>

    )



}