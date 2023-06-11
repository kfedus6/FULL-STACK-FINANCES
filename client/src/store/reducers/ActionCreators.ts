import localforage from "localforage";
import { $host } from "../../http";
import { IUser } from "../../types/types";
import { AppDispatch } from "../store";
import { userSlice } from "./UserSlice";
import { toast } from "react-toastify";

export const fetchRegistration = (userData: IUser) => async (dispatch: AppDispatch) => {
    try {
        const response = await $host.post('user', userData)
        if (response.status === 201) {
            localforage.setItem('token', response.data.token)
            dispatch(userSlice.actions.registration({ user: response.data.user, isAuth: true }))
            toast.success('Account has been created.')
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
            localforage.setItem('token', response.data.token)
            dispatch(userSlice.actions.registration({ user: response.data.user, isAuth: true }))
            toast.success('You are account in.')
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

export const fetchLogout = () => async (dispatch: AppDispatch) => {
    localforage.removeItem('token')
    dispatch(userSlice.actions.registration({ user: [], isAuth: false }))
    toast.success('You extid in account.')
}