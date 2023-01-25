import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/categoria';
import { CategoriasService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  loading: boolean = true;
  categories$!: Observable<Categoria[]>;

  constructor(private categoriesService: CategoriasService) { }

  ngOnInit(): void {
    this.categories$ = this.categoriesService.getAllCategories();
  }

}
