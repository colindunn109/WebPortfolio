import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Main from './components/Main';


class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
