import { createStore, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistStore } from 'redux-persist';
import rootReducer from "./root-reducer";

const logger = createLogger({

})

const middlewares = [logger];
export const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(...middlewares)
	)
) 

export const persistor = persistStore(store)