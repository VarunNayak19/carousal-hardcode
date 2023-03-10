import { configureStore } from '@reduxjs/toolkit';
import lngSlice from "./redux"


const store = configureStore({
    reducer: {
        language: lngSlice
    }
})

export default store;