
/* 
SIMPLE ACTION OBJ ->
{
	type: '' <- ACTION TYPE
	payload: <- CAN BE ANYTHING
}

*/

import { userActionTypes } from "./user-action.types";
const INITIAL_STATE = {
	currentUser: null
}
export const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case userActionTypes.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload
			}
	
		default: return state;
	}
}