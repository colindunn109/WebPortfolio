import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Aboutme from './components/About/Aboutme';
import Skills from './components/Skills/Skills';
import Work from './components/WorkExperience/Work';
import Navbar from './components/Navbar'


class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Projects />
        <Work />
        <Aboutme />
        <Footer />
      </div>
    );
  }
}

export default App;
