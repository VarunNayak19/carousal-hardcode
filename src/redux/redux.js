import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lng: localStorage.getItem("lng") ? localStorage.getItem("lng") : "en",
}

const lngSlice = createSlice({
    initialState,
    name: 'language',
    reducers: {
        setLang: (state, action) => {
            state.lng = action.payload;
            localStorage.setItem("lng", JSON.stringify(state.lng));
        }
    }
})

export const { setLang } = lngSlice.actions;

export default lngSlice.reducer;