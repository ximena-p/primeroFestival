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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum sequi sit, deserunt explicabo in iste fugit veniam similique labore voluptas mollitia corrupti quam totam at, corporis nulla? Dignissimos, soluta commodi!</p>
                </div>
                <div className="lado">
                    <img className="img" src={imagen} alt="" />
                </div>
            </section>
            </>
        )
    }
}