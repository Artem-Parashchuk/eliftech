import { createSlice } from "@reduxjs/toolkit"
import { fetchUsersThunk } from "./thunks.js"


const initialState = {
    users: [],
    loading: null,
    error: null,
    filters: {
        name: '',
        email: ''
    }
}

const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filters[action.payload.field] = action.payload.value
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchUsersThunk.pending, state => {
                state.error = false
                state.loading = true
            })
            .addCase(fetchUsersThunk.fulfilled, (state, action) => {
                state.error = false
                state.loading = false
                state.users = action.payload
            })
            .addCase(fetchUsersThunk.rejected, state => {
                state.error = true
                state.loading = false
            })
    }
})
export default userSlice.reducer
export const {setFilter} = userSlice.actions