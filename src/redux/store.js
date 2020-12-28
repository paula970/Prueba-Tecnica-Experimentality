import { applyMiddleware, createStore, combineReducers } from 'redux'
import {reducer, reducer2} from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

const rootReducers = combineReducers({
    buscador: reducer,
    video: reducer2,
})

const store =createStore(rootReducers,composeWithDevTools(applyMiddleware(thunk)));

export default store;