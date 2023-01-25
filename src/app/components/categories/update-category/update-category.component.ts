import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoriasService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss'],
})
export class UpdateCategoryComponent implements OnInit, OnDestroy {
  loading: boolean;
  action: 'create' | 'update';
  categoryId: string | undefined;

  updateCategoryForm: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
  });

  subscriptions = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private categoriesService: CategoriasService
  ) {
    this.categoryId = this.route.snapshot.params['categoryId'];
    this.action = 'create';
    this.loading = true;
  }

  ngOnInit(): void {
    if (this.categoryId) {
      this.action = 'update';
      this.getCategory();
    } else {
      this.action = 'create';
    }
  }

  getCategory() {
    if (this.categoryId) {
      this.subscriptions.add(
        this.categoriesService
          .getCategoryById(this.categoryId)
          .subscribe((category) => {
            if (category) {
              console.log(category);
              this.updateCategoryForm.patchValue({
                nombre: category.nombre,
              });
            }
          })
      );
    }
  }

  updateCategory() {
    // if create:
    if (this.action === 'create') {
      this.categoriesService
        .createCategory(this.updateCategoryForm.value)
        .then((v) => {
          alert('Categoría creada exitosamente');
          console.info(v);
        })
        .catch((err) => {
          alert('Ocurrió un error al intentar crear la categoría');
          console.error(err);
        });
    }
    // if update:
    else {
      if (this.categoryId) {
        this.categoriesService
          .updateCategory(this.updateCategoryForm.value, this.categoryId)
          .then((v) => {
            alert('Categoría actualizada exitosamente');
            console.info(v);
          })
          .catch((err) => {
            alert('Ocurrió un error al intentar actualizar la categoría');
            console.error(err);
          });
      } else {
        alert('Ocurrió un error al intentar actualizar la categoría');
        console.error('Id de categoría inexistente');
      }
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
