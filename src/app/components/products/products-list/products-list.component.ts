import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, take } from 'rxjs';
import { Product } from 'src/app/models/producto';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  loading: boolean = true;
  // subscriptions = new Subscription();
  products$!: Observable<Product[]>;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products$ = this.productsService.getAllProducts();
  }

}
