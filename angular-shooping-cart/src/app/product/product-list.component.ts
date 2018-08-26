import { Component, OnInit, Input } from "@angular/core";
import { Product } from "./product";
import { ProductService } from "./product.service";
import { ShoppingService } from "./shoppingCart.service";

@Component({
    selector: 'products',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css'],
    providers: [ProductService]
})
export class ProductComponent implements OnInit {

    public productsList: Array<Product>;
    public productService: ProductService;
    public listFilter: string;
    public shoppingCart: Array<number>;
    public totalPrice: number;

    constructor(productService: ProductService,
        private shoppingService: ShoppingService) {
        this.productService = productService;
    }

    ngOnInit(): void {
        //this.productsList = this.productService.getAllProducts();
        this.productService.getAllProducts()
            .subscribe(productsList => this.productsList = productsList
                , err => console.error(err));
        this.shoppingService.currentcart.subscribe(data => this.shoppingCart = data);
        this.shoppingService.currentPrice.subscribe(data => this.totalPrice = data);
        this.printCart();
    }

    private updateCart(id: number) {
        var index = this.shoppingCart.indexOf(id);
        if (index > -1) {
            this.shoppingCart.splice(index, 1);
            this.shoppingService.changeCart(this.shoppingCart);
            this.productService.getProductById(id)
                .subscribe(product => {
                    this.totalPrice -= product.price;
                    this.shoppingService.changePrice(this.totalPrice);
                },
                    err => console.error(err));
        }
        else {
            this.shoppingCart.push(id);
            this.shoppingService.changeCart(this.shoppingCart);
            this.productService.getProductById(id)
                .subscribe(product => {
                    this.totalPrice += product.price;
                    this.shoppingService.changePrice(this.totalPrice);
                },
                    err => console.error(err));
        }
        //this.printCart();
    }

    private printCart() {
        for (var i = 0; i < this.shoppingCart.length; i++)
            console.log(this.shoppingCart[i]);
    }
}
