import { configureStore } from '@reduxjs/toolkit'
import reducer from './slice'

const store = configureStore({
    reducer: {
        data: reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
export default store
export type AppDispatch = typeof store.dispatch
