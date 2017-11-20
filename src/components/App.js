import React, { Component } from 'react';
import SignIn from './SignIn';
import Profile from './Profile';

// This component should offer an if then statement which switches between the SignIn and Profile components based on the value of loggedInUser (null versus otherwise).

class App extends Component {
  render() {
    return (
      <div className="App">
         <SignIn />
         <Profile />
      </div>
    );
  }
}

export default App;

