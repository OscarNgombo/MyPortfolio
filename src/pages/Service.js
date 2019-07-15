import React, {Component} from 'react'
import Title from '../components/Tittle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDatabase,faMobileAlt,faCloud,faHandHoldingUsd,faLaptopCode,faCloudMeatball} from '@fortawesome/free-solid-svg-icons'


export default class WhatIcanDo extends Component {
    state={
        WhatIcanDo:[
            {
                icon:<FontAwesomeIcon icon={faCode} size="1x" />,
                title:"Web Application Development",
                info:"Fast, responsive and engaging apps that bring your ideas to life. Using frameworks such as Bootstrap, Reactjs"

                
        },
        {
            icon:<FontAwesomeIcon icon={faMobileAlt} size="1x" />,
            title:"Mobile Application Development",
            info:"Android applications built with efficiency and speed at once responsive and efficient."
        },
        {
            icon:<FontAwesomeIcon icon={faDatabase} size="1x" />,
            title:"Database Design",
            info:"Database architectures in SQLlite, MySQL, always aiming for performance, scale and stability."
        },
        {
            icon:<FontAwesomeIcon icon={faCloud} size="1x" />,
            title:"Cloud Integration",
            info:"Deployment of Bootstrap Websites, ReactJS apps and SQLdatabases to leading cloud platforms such as Google Cloud, Heroku and Amazon AWS."
        },
        {
            icon:<FontAwesomeIcon icon={faHandHoldingUsd} size="1x" />,
            title:"Payment Gateway Integration",
            info:"Integration with the most popular Payment Gateways such as M-Pesa Integration and Paypal."
        },
        {
            icon:<FontAwesomeIcon icon={faLaptopCode} size="1x" />,
            title:"Management Information System Development",
            info:"Development of information systems Windows based application using Java proggraming language, python and VB.net"
        },
        {
            icon:<FontAwesomeIcon icon={faCloudMeatball} size="1x" />,
            title:"Version Control",
            info:"In keeping track of the changes in software development projects, and enable one to collaborate on developed projects using GitHub or GitBucket. "
        }
        ]
    }
    render(){
    return (
    <section className="services item-center col-sm-12" >
    <Title title="What I do"/> 
    <div className="services-center">
    {this.state.WhatIcanDo.map((item,index)=>{
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
