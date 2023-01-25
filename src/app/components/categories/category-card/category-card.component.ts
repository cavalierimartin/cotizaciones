import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent implements OnInit {
  @Input() category!: Categoria;

  constructor(public categoriesService: CategoriesService) {}

  ngOnInit(): void {}

  deleteCategory(category: Categoria) {
    if (window.confirm(`¿Estás seguro de eliminar la categoría "${category.nombre}"?`)) {
      this.categoriesService
        .deleteCategoryById(category.id)
        .then((value) => {
          alert('Categoría borrada exitosamente');
          console.info(value);
        })
        .catch((err) => {
          alert('Ocurrió un error al intentar borrar la categoría');
          console.error(err);
        });
    }
  }
}
