import { applyMiddleware, createStore, combineReducers } from 'redux'
import {reducer, reducer2, reducer3} from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

const rootReducers = combineReducers({
    buscador: reducer,
    video: reducer2,
    videoInfo: reducer3,
})

const store =createStore(rootReducers,composeWithDevTools(applyMiddleware(thunk)));

export default store;