import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state) => ({
            ...state,
            count: state.count + 1
        }),
        decrement: (state) => ({
            ...state,
            count: state.count - 1
        }),
    },
});

export const { increment, decrement } = counterSlice.actions;      // actions lưu lại phéo tính công, trừ
export default counterSlice.reducer;