import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faRemove, faEdit } from '@fortawesome/free-solid-svg-icons'
import { CategoryService } from '../../services/category.service';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
    categoryForm: FormGroup

    removeIcon = faRemove
    editIcon = faEdit

    constructor(
        public categoryService: CategoryService
    ) {
        this.categoryForm = new FormGroup({
            title: new FormControl('', [Validators.required])
        })
    }

    ngOnInit(): void {
        this.categoryService.findAll()
    }

    onSubmit() {
        if (this.categoryForm.valid) {
            this.categoryService.create(this.categoryForm.value.title)
            this.categoryForm.reset()
        }
    }

    deleteHandler(id: number) {
        this.categoryService.delete(id)
    }
}
