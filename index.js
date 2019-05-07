import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      //<React.Fragment> es lo mismo que <>
      <>
         <h1> Hola </h1>
         <h1> Hola2 </h1>
     
      </>
    );
  }
}

render(<App />, document.getElementById('root'));
