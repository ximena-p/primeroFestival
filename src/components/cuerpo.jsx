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
                            <p>La misión es investigar crear y difundir diferentes expresiones artísticas en diferentes comunidades haciendo énfasis en la inclusión de las personas con discapacidad mediante diversos eventos festivales locales e internacionales participando activamente en procesos culturales de la ciudad y el país.</p>
                        </div>
                        <div className="ision">
                            <h2>Visión
                            </h2>
                            <p>La visón es ser en 5 años una institución sólida regida por principios éticos y que sea símbolo del arte y la cultura en la provincia de Yariguies y en el Magdalena medio santandereano así como líder en los procesos culturales en sabana de torres y Santander y vocero internacional del pensar criollo.</p>
                        </div>
                    </div>
                    <div className="obj">
                        <h2>Objetivos</h2>
                        <ul>
                            <li>1 Investigar promocionar y difundir las artes plásticas artesanías y cualquier otra expresión artística típica de nuestra región.</li>
                            <li>2 Enaltecer el oficio artístico de sus asociados creando en ellos una conciencia del criterio ético de integridad en la vida personal del artista y sentido trascendental del oficio.</li>
                            <li>3 Trabajar en pro de la defensa y vigencia de los derechos de protección y seguridad social de los artistas asociados.</li>
                            <li>4 Gestionar recursos económicos para la actividad investigativa creativa y de difusión artística de sus asociados.</li>
                            <li>5 Promover el desarrollo social cultural artístico permanente de sus asociados realizando diferentes actividades educativas y formativas.</li>
                            <li>6 Promover nuevos líderes en las áreas de competencia de la corporación programando y participando en talleres cursos y seminarios permanentes.</li>
                            <li>7 Proyectar el producto artístico de sus asociados con la venta de sus espectáculos a diferentes instancias del orden publico y privado o promoviendo presentaciones permanentes en su sede y diferentes espacios artísticos.</li>
                            <li>8 Liderar la realización del festival Primero festival en el municipio de sabana de torres como centro cultural de la provincia de Yariguies y el magdalena medio santandereano.</li>
                        </ul>
                    </div>
                    <img className=" logo" src={imagen} alt="" />
                </section>
            </>
        )
    }            
}