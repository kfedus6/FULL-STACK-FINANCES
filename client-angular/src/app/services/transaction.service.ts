import { Injectable, signal } from "@angular/core";
import { ITransaction, ITransactionData } from "../types/transaction.interface";
import { HttpClient } from "@angular/common/http";
import { ToastService } from "angular-toastify";
import { tap } from "rxjs";
import { CategoryService } from "./category.service";

@Injectable({
    providedIn: 'root'
})
export class TransactionService {
    transactionSig = signal<ITransaction[]>([])

    constructor(
        private readonly http: HttpClient,
        private readonly _toastService: ToastService,
        private categoryService: CategoryService,
    ) { }

    findAll() {
        return this.http
            .get<ITransaction[]>('transactions')
            .subscribe((res) => { this.transactionSig.set(res) })
    }

    create(data: ITransactionData) {
        return this.http
            .post<ITransaction>('transactions', data)
            .pipe(tap((newTransaction) => {
                const category = this.categoryService
                    .categoriesSig()
                    .find(ctg => ctg.id === newTransaction.category?.id)

                this.transactionSig.update((transactions) =>
                    [{ ...newTransaction, category }, ...transactions])
            }))
            .subscribe(() => this._toastService.success('You have created a transaction!'))
    }

    delete(id: number) {
        return this.http
            .delete(`transactions/transaction/${id}`)
            .subscribe(() => {
                this.transactionSig.update((transactions) =>
                    transactions.filter((transaction) => transaction.id !== id))
                this._toastService.warn('You have deleted the transaction!')
            })
    }
}