import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {apolloClient} from './apolloClient';
import {ApolloProvider} from 'react-apollo';
import Feed from './Feed';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient} className="App">
        <div>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Feed/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
