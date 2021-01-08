import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/core/models/category.modes';
import { LinkModel } from 'src/app/core/models/link.model';
import { ProductModel } from 'src/app/core/models/product.modes';
import { CategoryService } from 'src/app/core/services/category.service';
import { SpeechService } from 'src/app/core/services/speech.service';
import { GetProductByCategoryModel } from 'src/app/core/models/GetRequestModels/getProductsByCategoryID.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent extends SpeechService implements OnInit {
  public categories: CategoryModel[];
  public links: LinkModel[];
  public products: ProductModel[];

  constructor(private categoryService: CategoryService) {
    super();
  }

  ngOnInit(): void {
    this.getCategories();
    this.initLinks();
  }



  private initLinks(): void {
    this.links = [];
    this.getCategories().forEach(category => {
      this.links.push({ name: category.name, route: 'category/' + category.id });
    });
  }

  public getCategories(): CategoryModel[] {
    this.categoryService.loadCategories().subscribe(result => {
      this.categories = result;
      return result;
    });
    return [];
  }

  // tslint:disable-next-line:ban-types
  public getProducts(id: number): ProductModel[] {
    const params: GetProductByCategoryModel = {
        categoryId: id,
        page: 1
    };
    this.categoryService.loadProductsByCategoryId(params).subscribe(result => {
      this.products = result;
      console.log(this.products, 'products');
      return result;
    });
    return [];
  }

}
