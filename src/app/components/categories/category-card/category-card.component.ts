import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {

  @Input() category!: Categoria;

  constructor() { }

  ngOnInit(): void {
  }

}
