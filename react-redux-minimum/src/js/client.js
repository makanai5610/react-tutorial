import { combineReducers, createStore } from "redux";

const userReducer = (state = {}, action) => {
    return state;
}
const tweetsReducer = (state = [], action) => {
    return state
}

const reducers = combineReducers({
    user: userReducer,
    tweets: tweetsReducer
});

const store = createStore(reducers);

store.subscribe(() => {
    console.log("sotre changed", store.getState());
});

store.dispatch({ type: "FOO", payload: "BAR" });
