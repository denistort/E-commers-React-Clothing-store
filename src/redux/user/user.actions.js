import { userActionTypes } from "./user-action.types"

/* ACTIONS */

export const setCurrentUser = (userObj) => ({
	type: userActionTypes.SET_CURRENT_USER,
	payload: userObj
})