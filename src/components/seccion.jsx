import { Component } from "react";
import './seccion.css';
import arte from './cepillo.png'
import artesania from './ceramica.png'
import musica from './microfono.png'
import literatura from './libro.png'


export default class seccion extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <section className="section">
                <div className="sub-categoria">
                    <img className="imag" src={arte}></img>
                    <p>Arte</p>
                </div>
                <div className="sub-categoria">
                    <img src={artesania}></img>
                    <p>Artesania</p>
                </div>
                <div className="sub-categoria">
                    <img src={musica}></img>
                    <p>Musica</p>
                </div>
                <div className="sub-categoria">
                    <img src={literatura}></img>
                    <p>Literaruta</p>
                </div>
            </section>
        )
    }
}    