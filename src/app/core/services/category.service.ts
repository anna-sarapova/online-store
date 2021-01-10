import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryModel } from '../models/category.modes';
import { GetProductByCategoryModel } from '../models/GetRequestModels/getProductsByCategoryID.model';
import { ProductModel } from '../models/product.modes';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  protected baseUrl: string = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  public loadCategories(): Observable<CategoryModel[]> {
    return this.httpClient.get<CategoryModel[]>(this.baseUrl + 'api/Category/GetAllCategories');
  }

  // tslint:disable-next-line:ban-types
  public loadProductsByCategoryId(params: GetProductByCategoryModel): Observable<ProductModel[]> {
    return this.httpClient.get<ProductModel[]>(this.baseUrl + 'api/Products/' + params.categoryId + '/' + params.page);
  }
}
