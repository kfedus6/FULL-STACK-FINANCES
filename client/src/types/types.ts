export interface IUser {
    id?: number;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
}

export interface ICategory {
    id: number;
    title: string;
    createdAt: string;
    updatedAt: string;
    transactions: [];
}

export interface ITransaction {
    id: number;
    title: string;
    type: string;
    amount: number;
    createdAt: string;
    updatedAt: string;
    category: ICategory;
}