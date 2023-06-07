import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requestGetNews from "../sagas/news/request";


const handleFetchNews = createAsyncThunk('news/handleFetchNews', async (query, thunkAPI) => {
    const response = await requestGetNews(query);
    return response.data.hits;
})

const initialState = {
    hits: [],
    loading: true,
    errorMessage: "",
    query: "",
};

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(handleFetchNews.fulfilled, (state, action) => {
            state.hits = action.payload;
            state.loading = false;
        });
        builder.addCase(handleFetchNews.pending, (state, action) => {
            state.loading = true;
            state.hits = [];
        });
        builder.addCase(handleFetchNews.rejected, (state, action) => {
            state.loading = false;
        });
    },

});

export default newsSlice;