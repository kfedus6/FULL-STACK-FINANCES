import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICategory } from "../../types/types";

export interface CategoryState {
    categories: ICategory[];
}

const initialState: CategoryState = {
    categories: []
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        createCategory(state, action: PayloadAction<CategoryState>) {
            state.categories = action.payload.categories
        },
        updateCategory(state, action: PayloadAction<CategoryState>) {
            state.categories = action.payload.categories
        },
        findAllCaegories(state, action: PayloadAction<CategoryState>) {
            state.categories = action.payload.categories
        },
        deleteCaegoryId(state, action: PayloadAction<CategoryState>) {
            state.categories = action.payload.categories
        }
    }
})

export default categorySlice.reducer;