import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../images/logo.svg'

class Navbar extends Component {
  constructor(props) {
      
    super(props);

    this.state = {
      collapsed: true,
    };
  }
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent transparent-nav fixed-top container-fluid">
      <a className="navbar-brand" href="/"><img src={logo} alt="oscar ngombo"/><pre>Software Developer</pre></a>
      <button  onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${classOne}`} id="navbarResponsive">
          <ul className="navbar-nav ml-lg-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/what-i-do/">What I Do</Link>
            </li>
          <li className="nav-item">
              <Link className="nav-link" to="/about/">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact/">Contact</Link>
            </li>
            </ul>
        </div>
  </nav>
    );
  }
}

export default Navbar;