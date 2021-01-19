import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/core/models/category.modes';
import { LinkModel } from 'src/app/core/models/link.model';
import { ProductModel } from 'src/app/core/models/product.modes';
import { CategoryService } from 'src/app/core/services/category.service';
import { SpeechService } from 'src/app/core/services/speech.service';
import { GetProductByCategoryModel } from 'src/app/core/models/GetRequestModels/getProductsByCategoryID.model';
import { PaginatedResult, Pagination } from 'src/app/core/models/Pagination';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent extends SpeechService implements OnInit {
  public categories: CategoryModel[];
  public links: LinkModel[];
  public products: ProductModel[];
  public Pagination: Pagination;
  public pageNumber = 1;
  public pageSize = 5;
  public categoryId = -1;

  constructor(private categoryService: CategoryService) {
    super();
  }

  ngOnInit(): void {
    this.getCategories();
    this.initLinks();
    this.getProducts(-1);
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
  public getProducts(id: number){
    this.categoryId = id;
    this.categoryService.loadProductsByCategoryId(this.pageNumber, this.pageSize, this.categoryId)
    .subscribe((res: PaginatedResult<ProductModel[]>) => {
      this.products = res.result;
      this.Pagination = res.pagination;
    },
    res => {
      console.log(res);
    });
  }

  pageChanged(event: any): void {
    this.pageNumber = event.page;
    this.getProducts(this.categoryId);
  }

}
