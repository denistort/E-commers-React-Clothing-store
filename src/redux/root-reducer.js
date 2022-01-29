import { combineReducers } from "redux";
import { cartDropDownReducer } from "./cart-dropdown/cart-dropdown-reducer";
import { userReducer } from "./user/user-reducer";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { directoryReducer } from "./directory/directory.reducer";
import { shopReducer } from "./shop/shop.reducer";

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cartDropDown']
}
const rootReducer = combineReducers({
	user: userReducer,
	cartDropDown: cartDropDownReducer,
	directory: directoryReducer,
	shop: shopReducer
})
export default persistReducer(persistConfig, rootReducer);