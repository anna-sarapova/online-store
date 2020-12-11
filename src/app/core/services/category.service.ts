import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryModel } from '../models/category.modes';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  protected baseUrl: string = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  public loadCategories(): Observable<CategoryModel[]> {
    return this.httpClient.get<CategoryModel[]>(this.baseUrl + 'api/Category/get');
  }
}
