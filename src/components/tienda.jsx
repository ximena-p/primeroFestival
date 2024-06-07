import { Component } from "react";
import './tienda.css';
import uno from './noticia1.jpg'
import dos from './noticia2.jpg'
import tres from './noticia3.jpg'
import cuatro from './notici4.jpg'
import manati1 from './manatiCjs.jpg'
import manati2 from './manati.jpg'



export default class tienda extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <section className="tienda">
                <div>
                    <div>
                        <img src={uno} alt="" />
                        <p>Haciendo gestión de Cultura y discapacidad Con el Ingeniero Nilson Ballén, Director Departamental de Vivienda</p>
                    </div>
                    <div>
                        <img src={dos} alt="" />
                        <p>Trabajando Plan de desarrollo para cultura y educación con la comisión del Concejo Municipal</p>
                    </div>
                    <div>
                        <img src={tres} alt="" />
                        <p>Plan de desarrollo con CTP, Cabildo verde y Alcalde en el despacho</p>
                    </div>
                    <div>
                    <img src={cuatro} alt="" />
                        <p>Exposición del Ingeniero Sergio Pinto del Plan Plurianual de Inversión PDM 2024-2027</p>
                    </div>
                    ---------------------------------------------------------------------------------------------------------------------------
                    <div>
                        <h2>Recordatorios Inauguración Cajasan Cayumba En Arena y Resina</h2>
                    </div>
                    <div>
                        <img src={manati1} alt="" />
                    </div>
                    <div>
                    <img src={manati2} alt="" />
                    </div>
                </div>
                
            </section>
        )
    }
}    