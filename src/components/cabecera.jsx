import { Component} from "react";
import './cabecera.css';
{//import imagenTienda from './tienda.jpg';
}
    {//import imagenNoticias from './noticias.webp'
}


export default class cabecera extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            <section className="section-header">
                <h1 className="titulo">Noticias</h1>
            {//<div className="container">
                    
                        //<div className="lado">
                            //<a to="/">
                  //              <img className="img" src={imagenNoticias} alt="" />
                   //             <div>
                  //                  <div>Noticias</div>
                  //              </div>
                  //          </a>
                  //      </div>
                
                  //      <div className="lado">
                  //          <a to="/">
                  //              <img className="img" src={imagenTienda} alt="" />
                  //              <div>
                  //                  <div>Tienda</div>
                  //              </div>
                  //          </a>
                  //      </div>
                    
                //</div> 
            }    
            </section>
            </>
        )
    }
}