import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { StarComponent } from "./star.component";

@NgModule({
    declarations :[
        StarComponent
    ],
    imports :[
        FormsModule,
        CommonModule
    ],
    exports :[StarComponent],//to use in the product
    providers:[]
})

export class SharedModule{}