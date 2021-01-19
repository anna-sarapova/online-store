import { Component, OnInit } from '@angular/core';
import { Chart } from 'src/app/core/models/chart';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  chart: Chart;
  userId = localStorage.getItem('userid');
  constructor(private chartService: CartService,
              private authservice: AuthService) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    this.chartService.loadChart(localStorage.getItem('userid')).subscribe(result => {
      this.chart = result;
    });
  }

  deleteOrder(orderId: number) {
    this.chart.orders.splice(this.chart.orders.findIndex(x => x.id === orderId), 1);
    this.chartService.deleteOrder(orderId);
  }

  increaseOrder(productId: number, quantity: number) {
    const order: any = {
      userId: this.userId,
      productId,
      quantity: quantity + 1,
      chartId: this.chart.id
    };
    this.chartService.createOrder(order);
    const index = this.chart.orders.findIndex(x => x.productId === productId);
    if (index !== -1) {
      this.chart.orders[index].quantity++;
    }
  }

  decreaseOrder(productId: number, quantity: number, orderId: number) {
    if (quantity === 1) {
      this.deleteOrder(orderId);
    }
    else {
      const order: any = {
        userId: this.userId,
        productId,
        quantity: quantity - 1,
        chartId: this.chart.id
      };
      this.chartService.createOrder(order);
      const index = this.chart.orders.findIndex(x => x.productId === productId);
      if (index !== -1) {
        this.chart.orders[index].quantity--;
      }
    }
  }

}
