import { combineReducers } from "@reduxjs/toolkit";
import newsSlice from "../sagas/news/newSlice";


const reducer = combineReducers({
    news: newsSlice,
});

export default reducer;

