import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

class SignIn extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		username: "Username",
	    password: "Password"
  	};
  }
  render() {
    let loginAttempt = "";
    if (this.props.loginResult === false) {
      loginAttempt = <p className="loginFailure">Invalid username or password.</p>;
    } else if (this.props.loginResult === true) {
      loginAttempt = <p className="hidden"></p>;
    }
    return (
      <div className="SignIn">
    	<h1 className="signInHeader">Sign In</h1>
        <form className="signInForm" onSubmit={this.handleSubmit.bind(this)}>
           <input type="text" className="formInput" id="username" value={this.state.username} onClick={this.handleUsernameSelect.bind(this)} onChange={this.handleUsernameChange.bind(this)} />
           <input type="password" className="formInput" id="password" value={this.state.password} onClick={this.handlePasswordSelect.bind(this)} onChange={this.handlePasswordChange.bind(this)} />
           <button className="submitButton" type="submit">Sign In</button>
           {loginAttempt}
           <p className="forgotPassword"><a href="http://www.grandcircus.co" target="_blank">Forgot your password?</a></p>
        </form>
      </div>
    );
  }

  handleUsernameSelect(event) {
    this.setState({
      username: ""
    });
  }

  handlePasswordSelect(event) {
    this.setState({
      password: ""
    });
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
      username: "Username",
      password: "Password"
  	});
  }
}

function mapStateToProps(state) {
    return {
        loginResult: state.loginResult,
    };
};

const mapActionsToProps = {
    login
};

export default connect(mapStateToProps, mapActionsToProps)(SignIn);
