import { ICategory } from "./category.interface"

export interface ITransaction {
    id: number,
    title: string,
    amount: number,
    type: ITransactionType,
    createdAt: Date,
    updatedAt: Date,
    category?: ICategory | null,
}

export interface ITransactionData {
    title: string,
    amount: number,
    type: ITransactionType,
    category: number,
}

export type ITransactionType = 'income' | 'expense'