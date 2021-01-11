import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CategoryModel } from '../models/category.modes';
import { GetProductByCategoryModel } from '../models/GetRequestModels/getProductsByCategoryID.model';
import { PaginatedResult } from '../models/Pagination';
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
  public loadProductsByCategoryId(page?, itemsPerPage?, categoryId?): Observable<PaginatedResult<ProductModel[]>> {
    const paginatedResult: PaginatedResult<ProductModel[]> = new PaginatedResult<ProductModel[]>();
    let params = new HttpParams();
    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }
    params = params.append('categoryId', categoryId);
    return this.httpClient.get<ProductModel[]>(this.baseUrl + 'api/Products', { observe: 'response', params })
      .pipe(
        map(response => {
          paginatedResult.result = response.body;
          if (response.headers.get('Pagination') != null) {
            paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
          }
          return paginatedResult;
        })
      );
  }
}
