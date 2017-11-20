const tempUser = {
    username: 'tempuser',
    password: 'temppassword',
    name: 'Temp Person',
    email: 'temppassword@gmail.com',
    img: '/images/grantchirpus.png',
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
        default: 
            return state; 
    } 
} 

function loginSuccess(state, user) {
	return Object.assign({}, state, {
		  loggedInUser: user
	});
}