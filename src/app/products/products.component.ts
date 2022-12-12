import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  public head: any = []

  public value: any = []

  constructor(private _productService:ProductsService){
    this.head = Object.keys(_productService.cars[0])

    this.value = _productService.cars

  }

}
