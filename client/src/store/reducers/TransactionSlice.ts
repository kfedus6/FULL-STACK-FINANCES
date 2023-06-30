import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITransaction } from "../../types/types";

export interface TransactionState {
    transactions: ITransaction[]
}

const initialState: TransactionState = {
    transactions: []
}

export const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        createTransaction(state, action: PayloadAction<TransactionState>) {
            state.transactions = action.payload.transactions
        },
        findAllTransactions(state, action: PayloadAction<TransactionState>) {
            state.transactions = action.payload.transactions
        }
    }
})

export default transactionSlice.reducer;