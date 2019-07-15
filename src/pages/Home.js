import React from 'react'
import {Link} from 'react-router-dom'
import Services from '../components/Service'

export default function Home() {
    return (
        <React.Fragment>
        <div className="home-content ">
        <h1>Full stack Developer</h1>
        <div></div>
        <p>I'm a software developer based in Kenya.I'm comfortable throughout the stack, but my passion lies in the front end, at the intersection of code and design.</p>
        <Link className="btn-custom" to="/about">Know More about me</Link>
        </div>
        <Services/>
        </React.Fragment>
        
    )
}
