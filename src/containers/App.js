import React, { Component } from 'react';
import './App.css';
import Layout from '../components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <strong>
          This content is going to be rendered as the props.children inside the
          Layout component
        </strong>
      </Layout>
    );
  }
}

export default App;
