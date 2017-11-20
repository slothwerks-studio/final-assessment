import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

class SignIn extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		username: '',
	    password: '',
  	};
  }
  render() {
    return (
      <div className="SignIn">
    	<h1 className="signInHeader">Sign In</h1>
        <form className="signInForm" onSubmit={this.handleSubmit.bind(this)}>
           <input type="text" className="formInput" id="username" value={this.state.username} onChange={this.handleUsernameChange.bind(this)} />
           <input type="password" className="formInput" id="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} />
           <button className="submitButton" type="submit">Sign In</button>
           <p className="forgotPassword"><a href="http://www.grandcircus.co" target="_blank">Forgot your password?</a></p>
        </form>
      </div>
    );
  }

  handleUsernameChange(event) {
    this.setState({
        username: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.setState({
        password: event.target.value
    });
  }

  handleSubmit(event) {
  	event.preventDefault();
	this.props.login(this.state.username, this.state.password);
  	this.setState({
  		username: "",
  		password: "",
  	});
  }
}

const mapActionsToProps = {
    login
};

export default connect(null, mapActionsToProps)(SignIn);
