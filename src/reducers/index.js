const tempUser = {
    username: 'tempuser',
    password: 'temppassword',
    name: 'Temp Person',
    email: 'temppassword@gmail.com',
    img: '/images/indianajones.jpg',
    location: 'Nowhere, MI',
    phone: '111-222-3333'
};

const INITIAL_STATE = {
	loggedInUser: tempUser
}; 
  
export default function (state = INITIAL_STATE, action) { 
    switch (action.type) { 
    	case "LOGIN_SUCCESS":
    		return loginSuccess(state, action.user);
    	case "LOGIN_FAILURE":
    		return loginFailure(state);
        default: 
            return state; 
    } 
} 

function loginSuccess(state, user) {
	return Object.assign({}, state, {
		  loggedInUser: user
	});
}

function loginFailure(state) {
	// Do some stuff that might back some HTML show up in the DOM claiming a login failure.
}