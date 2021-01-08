import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/core/models/category.modes';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss']
})
export class PhonesComponent implements OnInit {
  public categories: CategoryModel[];

  constructor( private productservice: ProductService) {
  }

  ngOnInit(): void {
    this.getCategories();
  }

  public getCategories(): CategoryModel[] {
    this.productservice.loadCategories().subscribe(result => {
      this.categories = result;
      return result;
    });
    return [];
  }

}
