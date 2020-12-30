import { applyMiddleware, createStore, combineReducers } from 'redux'
import { reducer, reducer2, reducer3 } from "./reducers";
import thunk from 'redux-thunk';

const rootReducers = combineReducers({
    look: reducer,
    video: reducer2,
    videoInfo: reducer3,
})

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;