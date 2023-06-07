import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: "global",
    initialState: {
        darkMode: false,
        showSidebar: true,
        errorMessage: "",
    },
    reducers: {
        toggleDarkMode: (state, { payload }) => {
            return {
                ...state,
                darkMode: payload,
            }
        },
        toggleSidebar: (state, { payload }) => {
            return {
                ...state,
                showSidebar: payload,
            }
        },
        
    }
});

export const { toggleDarkMode, toggleSidebar } = globalSlice.actions;
export default globalSlice.reducer;