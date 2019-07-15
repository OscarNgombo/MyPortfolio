import React from 'react'
import {FaGithub,FaLinkedin,FaFacebook} from 'react-icons/fa'


export default function About() {
    const git="https://github.com/OscarNgombo";
    const linkd="https://www.linkedin.com/in/oscar-ngombo-64203b14a";
    const fb="https://web.facebook.com/13Tracso";
  
    return (
        <div className="container col-sm-10 add ">
       <article> 
       <div className="team-member">
       <img className="circular--landscape" src="https://avatars1.githubusercontent.com/u/43665409?s=460&v=4" alt="Oscar Ngombo"></img>
       <h4>Oscar Ngombo</h4>
       <ul className="list-inline social-buttons">
       <li><a href={git}><FaGithub size="50px"/></a></li>
       <li><a href={linkd}><FaLinkedin size="50px"/></a></li>
       <li><a href={fb}><FaFacebook size="50px"/></a></li>
       </ul>
       </div>
       <div className="row">  
       <div className="col-lg-12 col-lg-offset-2 text-center">
       <p className="large ">
       Hi! I'm Oscar Ngombo. I'm a software developer based in Kenya.
       <br/>
       <br/>
       I'm comfortable throughout the stack, but my passion lies in the front end, at the intersection of code and design. I currently have built this website and further another cooperate site on the development phase currently. I am also and AAD (Android Application Developer). Conversant with a wide range of programming languages.
       <br/>
       <br/>
       Outside of code, I like to enhance my IQ and creativity in other ways. I play Basketball, Soccer/Football, watching and listening to music, I'm always trying new ways of expressing myself. I also like to meditate, talk to strangers, and run lifestyle experiments.
       Currently, I am working at an Italian Space agency (ISA) in Malindi, Kenya and I am also on my fourth year of study at Pioneer International University Pursuing Bachelor of Science Information Technology.
       <br/>
       <br/>
       A list of my skills is at the home do scroll down!
       </p></div> 
       </div>
   
       </article>
        </div>
    )
}
