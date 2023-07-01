import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITransaction } from "../../types/types";

export interface TransactionState {
    transactions: ITransaction[]
    transactionsPagination: ITransaction[]
    totalIncome: number
    totalExpense: number
}

const initialState: TransactionState = {
    transactions: [],
    transactionsPagination: [],
    totalExpense: 0,
    totalIncome: 0
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
        },
        findAllPaginationTransactions(state, action: PayloadAction<TransactionState>) {
            state.transactionsPagination = action.payload.transactionsPagination
        },
        findIncomeAndExpenseTransactions(state, action: PayloadAction<TransactionState>) {
            state.totalIncome = action.payload.totalIncome
            state.totalExpense = action.payload.totalExpense
        },
        deleteTransaction(state, action: PayloadAction<TransactionState>) {
            state.transactions = action.payload.transactions
        },
    }
})

export default transactionSlice.reducer;