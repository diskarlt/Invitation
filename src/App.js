import React, { Component } from 'react';
import { Header, Footer, When, Gallery, Where, Information } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <When/>
        <Gallery/>
        <Information/>
        <Where/>
        <Footer/>
      </div>
    );
  }
}

export default App;
