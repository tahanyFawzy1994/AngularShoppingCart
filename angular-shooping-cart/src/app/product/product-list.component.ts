import { Component, OnInit } from "@angular/core";
import { Product } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: 'products',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css'],
    providers: [ProductService]
})
export class ProductComponent implements OnInit {

    private productsList: Array<Product>;
    private productService: ProductService;
    private listFilter: string;
    private shoppingCart: Array<number>;
    private totalPrice: number = 0;

    constructor(productService: ProductService) {
        this.productService = productService;
    }

    ngOnInit(): void {
        //this.productsList = this.productService.getAllProducts();
        this.productService.getAllProducts()
            .subscribe(productsList => this.productsList = productsList
                , err => console.error(err));
        this.shoppingCart = [];
    }

    private updateCart(id: number) {
        var index = this.shoppingCart.indexOf(id);
        if (index > -1) {
            this.shoppingCart.splice(index, 1);
            this.productService.getProductById(id)
            .subscribe(product => {
                this.totalPrice -= product.price;
            },
                err => console.error(err));
        }
        else {
            this.shoppingCart.push(id);
            this.productService.getProductById(id)
            .subscribe(product => {
                this.totalPrice += product.price;
            },
                err => console.error(err));
        }
    }

    private printCart() {
        for (var i = 0; i < this.shoppingCart.length; i++)
            console.log(this.shoppingCart[i]);
    }
}