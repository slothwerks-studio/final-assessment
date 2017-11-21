import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
         <h2 className="profileHeader">Profile</h2>
         <p className="welcome">Welcome, {this.props.loggedInUser.name}!</p>
         <div className="profileInfo">
	         <img src={this.props.loggedInUser.img} className="profileImage" alt="Profile Pic" />
	         <ul className="userInfo">
		         <li>Email: {this.props.loggedInUser.email}</li>
		         <li>Phone Number: {this.props.loggedInUser.phone}</li>
		         <li>Location: {this.props.loggedInUser.location}</li>
	         </ul>
         </div>
         <p className="editProfile"><a href="http://www.grandcircus.co" target="_blank">Edit Profile</a></p>
      </div>
    );
  }
}

export default Profile;

