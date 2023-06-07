import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import globalSlice from "./globalSlice";
import { increment } from "./counterSlice";

const reducer = combineReducers({
    counter: counterSlice,
    global: globalSlice,
});

const store = configureStore({
    reducer,
});

store.subscribe(() => {
    console.log(`current state: ${store.getState().counter.count}`);
});

store.dispatch(increment)

export default store;