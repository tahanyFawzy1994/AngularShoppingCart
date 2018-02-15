import { Component, OnInit } from "@angular/core";
import { Product } from "../product/product";
import { ProductService } from "../product/product.service";
import { ShoppingService } from "../product/shoppingCart.service";
import { Location } from '@angular/common';

@Component({
    templateUrl: 'shoppingCart.component.html'
})

export class ShoppingCartComponent implements OnInit {

    private shoppingCart: Array<Product> = [];
    private totalPrice: number;

    constructor(private productService: ProductService,
        private shoppingService: ShoppingService,
        private location: Location) { }

    ngOnInit(): void {
        this.shoppingService.currentcart.subscribe(data => {
            for (let i = 0; i < data.length; i++) {
                this.productService.getProductById(data[i]).subscribe(product => {
                    this.shoppingCart.push(product);
                });
            }
        });
        this.shoppingService.currentPrice.subscribe(data => this.totalPrice = data);
    }

    removeProduct(id: number): void {
        let x: number[] = [];
        for (let i = 0; i < this.shoppingCart.length; i++) {
            if (this.shoppingCart[i].productId == id) {
                this.totalPrice -= this.shoppingCart[i].price;
                this.shoppingService.changePrice(this.totalPrice);
            }
            else {
                x.push(this.shoppingCart[i].productId);
            }
        }
        this.shoppingCart = [];
        this.shoppingService.changeCart(x);
    }

    private printCart() {
        console.log("print cart");
        for (var i = 0; i < this.shoppingCart.length; i++)
            console.log(this.shoppingCart[i].productId);
    }

    onBack(): void {
        this.location.back();
    }
}