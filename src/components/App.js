import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignIn from './SignIn';
import Profile from './Profile';

// This component should offer an if then statement which switches between the SignIn and Profile components based on the value of loggedInUser (null versus otherwise).

class App extends Component {
  render() {
  		if (this.props.loggedInUser === null) {
  		  return (
  		  	<div className="App">
  		  		<SignIn />
	  		</div>
  		  );
  		} else {
  		  return (
  		  	<div className="App">
  		  		<Profile loggedInUser={this.props.loggedInUser}/>
	  		</div>
  		  );	
  		}
  }
}

function mapStateToProps(state) {
    return {
        loggedInUser: state.loggedInUser,
    };
};

export default connect(mapStateToProps)(App);

