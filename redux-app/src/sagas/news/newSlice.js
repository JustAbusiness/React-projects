import { createSlice } from "@reduxjs/toolkit";

const newSlice = createSlice({
    name: "news",
    initialState: {
        hits: [],
        loading: true,
        query: "",
    },
    reducers: {
        setNews: (state, action) => ({
            ...state,
            hits: action.payload
        }),

        getNews() { },
        setLoading: (state, action) => ({
            ...state,
            loading: action.payload
        }),

        setErrorMessage: (state, action) => ({
            ...state,
            errorMessage: action.payload
        }),
        setQuery: (state, action) => ({
            ...state,
            query: action.payload
        }),

    }
});


export const { setNews, getNews, setLoading, setErrorMessage, setQuery } = newSlice.actions;
export default newSlice.reducer;