import { Component, OnInit } from "@angular/core";
import { Product } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector : 'products',
    templateUrl : 'product-list.component.html',
    styleUrls : ['product-list.component.css'],
    providers : [ProductService]
})
export class ProductComponent implements OnInit{

    private productsList : Array<Product>;
    private productService : ProductService;
    private listFilter : string ;

    constructor(productService :ProductService){
        this.productService = productService;
    }

    ngOnInit(): void {
        this.productsList = this.productService.getAllProducts();
    }


}