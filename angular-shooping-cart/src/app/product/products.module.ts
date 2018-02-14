import { NgModule } from "@angular/core";
import { ProductDetailsComponent } from "./productDetails/product-details.component";
import { ProductComponent } from "./product-list.component";
import { ProductFilterPipe } from "./ProductFilter.pipe";
import { ProductService } from "./product.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { StarComponent } from "../shared/star.component";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";

@NgModule({
    declarations: [
        ProductDetailsComponent,
        ProductComponent,
        ProductFilterPipe
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule,
        HttpModule,
        SharedModule
    ],
    exports: [],
    providers: [ProductService]
})

export class ProductModule { }