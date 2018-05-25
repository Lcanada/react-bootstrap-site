import React, { Component } from 'react';
import './footer.css';

class Footer extends Component{
  render(){
    return(
      <div>
        <footer className="footer">
          <div className="container">
            <span className="text-muted">Canalyn Inc 2018 &#169;</span>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
