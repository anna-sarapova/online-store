import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/core/models/product.modes';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss']
})
export class PhonesComponent implements OnInit {
  product: ProductModel;
  userId = localStorage.getItem('userid');

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private chartService: CartService) {
  }

  ngOnInit(): void {
    this.productService.getProductById(this.route.snapshot.paramMap.get('id')).subscribe(result => {
      this.product = result;
    });
  }

  createOrder() {
    const order: any = {
      userId: this.userId,
      productId: this.product.id,
      quantity: 1,
      chartId: -1
    };
    this.chartService.createOrder(order);
  }
}
