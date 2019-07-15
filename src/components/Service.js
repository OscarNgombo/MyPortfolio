import React, {Component} from 'react'
import Title from './Tittle'
import { DiAndroid,DiBootstrap,DiCss3,DiJavascript,DiPhp,DiPython,DiReact, } from "react-icons/di";



export default class Service extends Component {
state={
    services:[
        {
            icon:<DiAndroid/>,
            title:"Android Application Development",
            info:"I am self taught android developer verstily skilled and currently on the Google schorlaship for africa undertaking tha ALC course in Android application path"
        },
        {
            icon:<DiBootstrap/>,
            title:"Bootstrap",
            info:"Conversant with Bootstrap framework"
        },
        {
            icon:<DiJavascript/>,
            title:"Javascript",
            info:"For front end Web Development I am very Conversant with Javascript and with it's framework like ReactJS",
            
        },
        {
            icon:<DiReact/>,
            title:"REACT",
            info:"For front end Web Development I am very Conversant with React, this website has been fully developed using ReactJs",
            
        },
        {
            icon:<DiCss3/>,
            title:"CCS3",
            info:"Knowldeged and with 2 years experience in using CSS3"
        },
        {
            icon:<DiPhp/>,
            title:"PHP",
            info:"Conversant with PHP for Back end Web Developer with a one year experience in this serve side language."
        },
        {
            icon:<DiPython/>,
            title:"Python Programming Language",
            info:"Conversant and iffective with python programming language for standallone application development"
        }
    ]
}
    render(){
return( 
    <section className="services" >
    <Title title="skills"/> 
    <div className="services-center">
    {this.state.services.map((item,index)=>{
        return <article key={index} className="service">
        <span>{item.icon}</span>
        <h5>{item.title}</h5>
        <p>{item.info}</p>
        </article>
    })}
    </div>
    
 </section>
 )
    }
}
