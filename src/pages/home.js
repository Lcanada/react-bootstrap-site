import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Jumbotron from '../components/jumbotron';


class Home extends Component{
  render(){

    return(
      <div>
      <Navbar />
      <Jumbotron title="Welcome" subtitle="What's Up code BAE?"/>
        <div className="container">
          <h2>Welcome Dev!</h2>
          <p>Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Quisque ac ante vel urna molestie finibus nec nec tellus. Morbi ullamcorper lorem at condimentum congue. Nunc vitae magna aliquet, tempor tortor eget, venenatis mi.
          Etiam vitae pharetra nisl, id volutpat est.
          </p>
        </div>
      <Footer />
      </div>
    );
  }
}
export default Home;
