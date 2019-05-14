import React from 'react';
import { connect } from 'react-redux';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>hello world.</div>
    );
  };
};

export default connect(null, {})(App);
