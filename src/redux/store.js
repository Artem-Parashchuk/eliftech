import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from './events/eventsSlice.js'
import usersReducer from './users/usersSlice.js'

export const store = configureStore({
    reducer: {
        events: eventsReducer,
        users: usersReducer
    }
})