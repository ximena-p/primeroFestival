import { Component } from "react";
import './cuerpo.css'

import imagen from './logo-s.jpeg'

export default class cuerpo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <section className="cuerpo-1">
                    <div className="cuerpo">
                        <div className="ision">
                            <h2>Misión
                            </h2>
                            <p>La mision es investigar crear y difundir diferentes expresiones artisticas en diferentes comunidades haciendo enfasisi en la inclusion de las personas con discapacidad mesiante diversos eventos festivales locales e einternacionales participando activamente en procesos culturales de la ciudad y el pais.</p>
                        </div>
                        <div className="ision">
                            <h2>Visión
                            </h2>
                            <p>La vison es ser en 5 años una institucion solida regida por principios eticos y que sea simbolo del arte y la cultura en la provincia de Yariguies y en el magdalenda medio  santandereano asi como lider en los prcesos culturales en sabana de torres y santander y vocero internacional del pensar criollo.</p>
                        </div>
                    </div>
                    <div className="obj">
                        <h2>Objetivos</h2>
                        <ul>
                            <li>1 Investigar promocionar y difundir las artes plasticas ertesanias y cualeuier otra ezpresion artistica tipica de nuestra region.</li>
                            <li>2 Enaltecer el oficio artistico de sus asociados creando en ellos una concienciadel croterio etico de integridad en la vida personal del artista y sentido tracendental del oficio.</li>
                            <li>3 Trabajar en pro de la defensa y vigencia de los derevhos de proteccion y seguridad social de los artistas asociados.</li>
                            <li>4 Gestionar recursos economicos para la actividad investigativa creativa y de difusion artistica de sus asociados.</li>
                            <li>5 Promover el desarrollo social cultural  artistivo permanente de sus asociados realizando aiferentes actividades educativas y formativas.</li>
                            <li>6 Promover nuevos lideres en las areas de comperencia de la corporacion programando y participando en talleres cursos y seminarios permanentes.</li>
                            <li>7 Proyectar el producto artistico de sus asociados con la venta de sus espevtaculos a diferentes instancias del orden publico y privado o promoviendo presentaciones permanentes en su sede y diferentes espacios artisticos.</li>
                            <li>8 Liderar la realizacion del festival Primero festival en el municipio de sabana de torres como centro vultural de la provincia de Yariguies y el magdalena medio santandereano.</li>
                        </ul>
                    </div>
                    <img className=" logo" src={imagen} alt="" />
                </section>
            </>
        )
    }            
}