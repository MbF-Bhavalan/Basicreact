import React from 'react';
import Layout from './Layout';
import BasicExample from './BasicExample';

class App extends React.Component {

  render() {
  	// const User = () => <h1>Welcome to the user page</h1>;
    return (
      <Layout
      header='title'
      footer='copy right'>
      	<BasicExample/>
      </Layout>

    );
  }
}

export default App;
