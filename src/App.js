import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MusicSearch from './components/musicSearch';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Music Search!</h2>
            <h3>You can find the greatest hits on iTunes and Spotify. Let's begin!</h3>
          </div>
          <div className="App-intro">
            <MusicSearch />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
