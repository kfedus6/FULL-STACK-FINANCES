import { HttpClient } from "@angular/common/http";
import { Injectable, signal } from "@angular/core";
import { ToastService } from "angular-toastify";
import { API_URL } from "../constants/constants";
import { ICategory } from "../types/category.interface";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    categoriesSig = signal<ICategory[]>([])

    constructor(
        private readonly http: HttpClient,
        private readonly _toastService: ToastService,
    ) { }

    findAll() {
        return this.http
            .get<ICategory[]>('categories')
            .subscribe((categories: ICategory[]) => {
                this.categoriesSig.set(categories)
            })
    }

    create(title: string) {
        return this.http
            .post<ICategory>('categories', { title })
            .subscribe((newCategory: ICategory) => {
                this.categoriesSig.update((categories) => [...categories, newCategory])
                this._toastService.success('You have created a category!')
            })
    }

    delete(id: number) {
        return this.http
            .delete(`categories/category/${id}`)
            .subscribe(() => {
                this.categoriesSig.update((categories) =>
                    categories.filter((category) => category.id !== id)
                )
                this._toastService.warn('You have deleted the category!')
            })
    }
}