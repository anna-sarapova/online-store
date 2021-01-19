import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Chart } from '../models/chart';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  protected baseUrl: string = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  public loadChart(userId): Observable<Chart> {
    if (userId == null) {
      return new Observable<Chart>();
    }
    return this.httpClient.get<Chart>(this.baseUrl + 'api/Chart/chart/' + userId);
  }

  createOrder(order: any) {
    return this.httpClient.post(this.baseUrl + 'api/Chart/CreateOrder', order).subscribe();
  }

  deleteOrder(orderId: number) {
    return this.httpClient.delete(this.baseUrl + 'api/Chart/delete/' + orderId).subscribe();
  }
}
