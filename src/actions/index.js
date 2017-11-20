import { findMatchingUser } from '../users';

export function login(username, password) {
    return function(dispatch) {
        const user = findMatchingUser(username, password);
        // If it username/password are correct, a user object will be available
        if (user !== null) {
        	dispatch(success(user));
       	} else{
       		dispatch(failure());
       	}
   	};
}
        	
function success(user) {
	return {
		type: "LOGIN_SUCCESS",
		user
	};
}

function failure() {
	return {
		type: "LOGIN_FAILURE",
	};
}
