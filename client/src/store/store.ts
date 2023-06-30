import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "./reducers/UserSlice";
import category from "./reducers/CategorySlice";
import transaction from "./reducers/TransactionSlice";

const rootReducer = combineReducers({
    user,
    category,
    transaction
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']