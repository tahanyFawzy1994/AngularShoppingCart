import { PipeTransform , Pipe} from "@angular/core";
import { Product } from "./product";

@Pipe({
    name: 'productfilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(value: Array<Product>, filterBy : string): Array <Product>{
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy? 
            value.filter((product : Product) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}