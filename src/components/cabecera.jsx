import { Component} from "react";
import './cabecera.css';
import imagen from './arte-abstracto.webp'

export default class cabecera extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            <section className="section-header">
                <div className="lado">
                    <img className="img" src={imagen} alt="" />
                </div>
                <div>
                <h1>PRIMERO FESTIVAL</h1>
                <p>Es un festival cultural organizado para promover y perpetuar la cultura y las costumbres en el departamento de Santander</p>
                </div>
                <div className="lado">
                    <img className="img" src={imagen} alt="" />
                </div>
            </section>
            </>
        )
    }
}