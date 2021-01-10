import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryModel } from '../models/category.modes';
import { ProductModel } from '../models/product.modes';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  protected baseUrl: string = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  public getProductById(id: string): Observable<ProductModel> {
    return this.httpClient.get<ProductModel>(this.baseUrl + 'api/Products/GetById/' + id);
  }
}
