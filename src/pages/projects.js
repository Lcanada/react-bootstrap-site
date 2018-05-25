import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Jumbotron from '../components/jumbotron';
import Album from '../components/album';

class Projects extends Component{
  render(){
    return(
      <div>
      <Navbar />
      <Jumbotron title="Black Developers Unite!" subtitle="Yes you can!"/>
        <div className="container">
          <h2>We are a community of builders!</h2>
          <p>Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Quisque ac ante vel urna molestie finibus nec nec tellus. Morbi ullamcorper lorem at condimentum congue. Nunc vitae magna aliquet, tempor tortor eget, venenatis mi.
          Etiam vitae pharetra nisl, id volutpat est.
          </p>
        </div>
      <Album />
      <Footer />
      </div>
    );
  }
}
export default Projects;
