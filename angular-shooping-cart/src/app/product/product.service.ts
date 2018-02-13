import { Injectable } from "@angular/core";
import { Product } from "./product";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {

    private productsURL = 'api/products/products.json';//can use real url

    constructor(private httpObj: Http) {}

    public getAllProducts(): Observable<Product[]> {
        return this.httpObj.get(this.productsURL)
            .map((response: Response) => <Product[]>response.json())
            //.do(data => console.log(JSON.stringify(data)))
            .catch(this.handleError);
    }

    public getProductById(id : number) : Observable<Product>{
        return this.getAllProducts()
        .map((products :Product[])=> products.find(p => p.productId==id))
        //.do(data => console.log(JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


}