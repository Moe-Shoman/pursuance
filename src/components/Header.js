import React, { Component } from 'react';

import logo from '../logo.svg';

export default class Header extends Component {
  render() {
    return (
      <div className="App-header" style={{display: 'flex',
                                          justifyContent: 'center',
                                          alignItems: 'center'}}>
        <img src={logo} className="App-logo" alt="logo" style={{height: '150px'}} />
        <h2 style={{margin: '0px 20px'}}>Ensue</h2>
      </div>
    )
  }
}
