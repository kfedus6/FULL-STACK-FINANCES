export interface IUser {
    id?: number;
    email: string;
    password: string;
}

export interface ICategory {
    id: number;
    title: string;
    createdAt: string;
    updatedAt: string;
    transactions: [];
}