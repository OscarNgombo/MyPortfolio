import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';


import Home from './pages/Home';
import WhatIDo from './pages/Service';
import About from './pages/About';
import Contact from './pages/Contact';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';



function App() {
  
  return (
    
    <div className="container-fluid">
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/what-i-do/" component={WhatIDo}/>
    <Route exact path="/about/" component={About}/>
    <Route exact path="/contact/" component={Contact}/>
    <Route component={Error}/>
    </Switch>
    <Footer/>
    </div>
    
    
  );
}

export default App;