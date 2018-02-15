import { Component, OnInit } from '@angular/core';
import { ShoppingService } from './product/shoppingCart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.shoppingService.currentPrice.subscribe(data => this.totalPrice = data);
  }

  pageTitle: string = "Home Page";
  totalPrice: number = 0;

}
