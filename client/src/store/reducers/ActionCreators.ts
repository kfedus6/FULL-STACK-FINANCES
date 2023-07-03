import { $host, $authHost } from "../../http";
import { IUser } from "../../types/types";
import { AppDispatch } from "../store";
import { categorySlice } from "./CategorySlice";
import { transactionSlice } from "./TransactionSlice";
import { userSlice } from "./UserSlice";
import { toast } from "react-toastify";

//User Action
export const fetchRegistration = (userData: IUser) => async (dispatch: AppDispatch) => {
    try {
        const response = await $host.post('user', userData)
        if (response.status === 201) {
            localStorage.setItem('token', response.data.token)
            dispatch(userSlice.actions.registration({ user: response.data, isAuth: true }))
            toast.success('Account has been created!')
        }
    } catch (err: any) {
        if (Array.isArray(err.response.data.message)) {
            toast.error(err.response.data.message[0])
            toast.error(err.response.data.message[1])
        } else {
            toast.error(err.response.data.message)
        }
    }
}

export const fetchLogin = (userData: IUser) => async (dispatch: AppDispatch) => {
    try {
        const response = await $host.post('auth/login', userData)
        if (response.status === 201) {
            localStorage.setItem('token', response.data.token)
            dispatch(userSlice.actions.registration({ user: response.data, isAuth: true }))
            toast.success('You logged in!')
        }
    } catch (err: any) {
        if (Array.isArray(err.response.data.message)) {
            toast.error(err.response.data.message[0])
            toast.error(err.response.data.message[1])
        } else {
            toast.error(err.response.data.message)
        }
    }
}

export const fetchProfile = () => async (dispatch: AppDispatch) => {
    try {
        const response = await $host.get('auth/profile')
        dispatch(userSlice.actions.profile({ user: response.data, isAuth: true }))
    } catch (err: any) {
        toast.error(err.response.data.message)
    }
}

export const fetchLogout = () => async (dispatch: AppDispatch) => {
    localStorage.removeItem('token')
    dispatch(userSlice.actions.registration({ user: [], isAuth: false }))
    toast.success('You logged out!')
}

//Category Action

export const fetchCreateAndUpdateCategory = (type: string, title: string, id: number) => async (dispatch: AppDispatch) => {
    switch (type) {
        case 'post': {
            const response = await $authHost.post('categories', { title })
            dispatch(categorySlice.actions.createCategory({ categories: response.data }))
            toast.success('You have created a category!')
            break
        }
        case 'patch': {
            const response = await $authHost.patch(`categories/category/${id}`, { title })
            dispatch(categorySlice.actions.updateCategory({ categories: response.data }))
            toast.success('You have updated a category!')
            break
        }
        default: {
            break
        }
    }
}

export const fetchFindAllCategories = () => async (dispatch: AppDispatch) => {
    try {
        const response = await $authHost.get('categories')
        dispatch(categorySlice.actions.findAllCaegories({ categories: response.data }))
    } catch (err: any) {
        toast.error(err.response.data.message)
    }
}

export const deleteCategoryId = (id: number) => async (dispatch: AppDispatch) => {
    try {
        const response = await $authHost.delete(`categories/category/${id}`)
        dispatch(categorySlice.actions.deleteCaegoryId({ categories: response.data }))
        toast.success('You have deleted the category!')
    } catch (err: any) {
        toast.error(err.response.data.message)
    }
}

//Transaction Action

export const fetchCreateTransaction = (data: any) => async (dispatch: AppDispatch) => {
    try {
        const response = await $authHost.post('transactions', data)
        dispatch(transactionSlice.actions.createTransaction({ transactions: response.data, transactionsPagination: [], totalExpense: 0, totalIncome: 0 }))
        toast.success('You have created a transaction!')
    } catch (err: any) {
        toast.error(err.response.data.message)
    }
}

export const fetchFindAllTransactions = () => async (dispatch: AppDispatch) => {
    try {
        const response = await $authHost.get('transactions')
        dispatch(transactionSlice.actions.findAllTransactions({ transactions: response.data, transactionsPagination: [], totalExpense: 0, totalIncome: 0 }))
    } catch (err: any) {
        toast.error(err.response.data.message)
    }
}

export const fetchFindAllPaginationTransactions = (page: number, limit: number) => async (dispatch: AppDispatch) => {
    try {
        const response = await $authHost.get(`transactions/pagination?page=${page}&limit=${limit}`)
        dispatch(transactionSlice.actions.findAllPaginationTransactions({ transactions: [], transactionsPagination: response.data, totalExpense: 0, totalIncome: 0 }))
    } catch (err: any) {
        toast.error(err.response.data.message)
    }
}

export const fetchIncomeAndExpenseTransactions = () => async (dispatch: AppDispatch) => {
    try {
        const responseIncome = await $authHost.get('transactions/income/find')
        const responseExpense = await $authHost.get('transactions/expense/find')
        dispatch(transactionSlice.actions.findIncomeAndExpenseTransactions({ transactions: [], transactionsPagination: [], totalExpense: responseExpense.data, totalIncome: responseIncome.data }))
    } catch (err: any) {
        toast.error(err.response.data.message)
    }
}

export const fetchDeleteTransaction = (id: any) => async (dispatch: AppDispatch) => {
    try {
        const response = await $authHost.delete(`transactions/transaction/${id}`)
        dispatch(transactionSlice.actions.deleteTransaction({ transactions: response.data, transactionsPagination: [], totalExpense: 0, totalIncome: 0 }))
        toast.success('You have deleted the transaction!')
    } catch (err: any) {
        toast.error(err.response.data.message)
    }
}