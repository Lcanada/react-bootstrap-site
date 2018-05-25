import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {

  render(){
    return(
      <div>
        <nav className=" navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className=" navbar-brand" to="/">Canalyn Inc</a>
          <div id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
