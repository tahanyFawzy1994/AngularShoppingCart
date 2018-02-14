import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { WelcomeComponent } from "../home/welcome.component";
import { ProductComponent } from "../product/product-list.component";
import { ProductDetailsComponent } from "../product/productDetails/product-details.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'welcome', component: WelcomeComponent },
            { path: 'product/:id', component: ProductDetailsComponent },
            { path: 'products', component: ProductComponent },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },//the default if nothing entered or on the application load
            { path: '**', redirectTo: 'welcome', pathMatch: 'full' },//for any other path
            
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }