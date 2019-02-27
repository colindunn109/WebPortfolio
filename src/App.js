import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Aboutme from './components/About/Aboutme';
import Skills from './components/Skills';


class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Aboutme />
        <Skills />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
