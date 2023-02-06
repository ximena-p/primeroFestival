import { Component } from "react";
import './cabecera.css'
import facebook from './facebook.png'
import email from './email.png'
import insta from './instagram.png'

export default class cuerpo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <section className="footer">
                    <p>Contactanos</p>
                    <div className="redes-s">
                        <div>
                            <img className="red" src={facebook} alt="">
                            </img>
                            <p>Facebook</p>
                        </div>
                        <div>
                            <img className="red" src={email} alt="">
                            </img>
                            <p>primerofestival@gmail.com</p>
                        </div>
                        <div>
                            <img className="red" src={insta} alt="">
                            </img>
                            <p>Instagram</p>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}