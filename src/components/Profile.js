import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
         <h2 className="profileHeader">Profile</h2>
         <p className="welcome">Welcome, {this.props.loggedInUser.name}!</p>
         <div className="profileInfo">
	         <img src={this.props.loggedInUser.img} className="profileImage" alt="Profile Pic" />
	         <p className="userInfo">Email: {this.props.loggedInUser.email}</p>
	         <p className="userInfo">Phone Number: {this.props.loggedInUser.phone}</p>
	         <p className="userInfo">Location: {this.props.loggedInUser.location}</p>
         </div>
         <p className="editProfile">Edit Profile</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        loggedInUser: state.loggedInUser
    };
};

export default connect(mapStateToProps)(Profile);

