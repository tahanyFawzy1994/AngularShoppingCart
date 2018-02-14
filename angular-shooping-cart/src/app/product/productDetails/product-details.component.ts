import { Component, OnInit } from "@angular/core";
import { Product } from "../product";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../product.service";

@Component({
    selector: 'product-details',
    templateUrl: 'product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {

    product: Product;

    constructor(private routeObj: ActivatedRoute,
        private productService: ProductService,
        private router: Router) { }

    ngOnInit(): void {
        let id = this.routeObj.snapshot.params['id'];
        //snapshot because we will initialise every time we visit the page , 
        //use observable if the id will change in the same page
        this.productService.getProductById(id)
            .subscribe(data => this.product = data);
    }

    onBack() {
        this.router.navigate(['/products']);
    }
}