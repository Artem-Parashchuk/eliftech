import { createSlice } from "@reduxjs/toolkit"
import { fetchEventsThunk } from "./thunks.js"


const initialState = {
    events: [],
    loading: null,
    error: null
}

const eventsSlice = createSlice({
    name: 'events',
    initialState: initialState,
    reducers:{},
    extraReducers: builder => {
        builder
            .addCase(fetchEventsThunk.pending, state => {
                state.error = false
                state.loading = true
            })
            .addCase(fetchEventsThunk.fulfilled, (state, action) => {
                state.error = false,
                state.loading = false,
                state.events = action.payload
            })
            .addCase(fetchEventsThunk.rejected, (state) => {
                state.error = true
                state.loading = false
            })
    }
})
export default eventsSlice.reducer