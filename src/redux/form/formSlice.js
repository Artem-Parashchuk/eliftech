import { createSlice } from "@reduxjs/toolkit";
import { submitFormThunk } from "./formThunks";


const formSlice = createSlice({
    name: 'form',
    initialState: {
        loading: false,
        error: false
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(submitFormThunk.pending, state => {
                state.loading = true
                state.error = false
            })
            .addCase(submitFormThunk.fulfilled, state => {
                state.loading = false
                state.error = false
            })
            .addCase(submitFormThunk.rejected, state => {
                state.loading = false
                state.error = true
            })
    }
})
export default formSlice.reducer