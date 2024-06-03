import { Component} from "react";
import './cabecera.css';
import imagenTienda from './tienda.jpg';
import imagenNoticias from './noticias.webp'
import {link} from 'react-router-dom'


export default class cabecera extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            <section className="section-header">
                <div className="container">
                    
                        <div className="lado">
                            <link to="/noticias">
                                <img className="img" src={imagenNoticias} alt="" />
                                <div>
                                    <div>Noticias</div>
                                </div>
                            </link>
                        </div>
                
                        <div className="lado">
                            <link to="/tienda">
                                <img className="img" src={imagenTienda} alt="" />
                                <div>
                                    <div>Tienda</div>
                                </div>
                            </link>
                        </div>
                    
                </div>
                {//
                }
            </section>
            </>
        )
    }
}