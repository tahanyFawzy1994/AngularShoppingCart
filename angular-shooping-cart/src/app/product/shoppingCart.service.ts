import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ShoppingService {
    private price = new BehaviorSubject<number>(0);
    currentPrice = this.price.asObservable();

    private cart = new BehaviorSubject<Array<number>>([]);
    currentcart = this.cart.asObservable();

    constructor() { }

    public changePrice(price: number) {
        this.price.next(price);
    }

    public changeCart(newCart: Array<number>) {
    //     console.log("service cart");
    //  for(let i = 0 ; i < newCart.length ;i++){
    //     console.log(newCart[i]);
    // }
        this.cart.next(newCart);
    }
}