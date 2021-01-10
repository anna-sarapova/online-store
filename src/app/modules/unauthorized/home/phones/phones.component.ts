import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/core/models/product.modes';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss']
})
export class PhonesComponent implements OnInit {
  product: ProductModel;
  constructor(private productService: ProductService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.productService.getProductById(this.route.snapshot.paramMap.get('id')).subscribe(result => {
      this.product = result;
      console.log(this.product);
    });
  }

}
