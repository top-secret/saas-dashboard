import { applyMiddleware, createStore } from 'redux';
import reducer from './reducer';
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
const loggerMiddleware = createLogger();

// ==============================|| REDUX - MAIN STORE ||============================== //

const store = createStore(reducer,
    applyMiddleware(thunkMiddleware, loggerMiddleware) 
);

export { store };

