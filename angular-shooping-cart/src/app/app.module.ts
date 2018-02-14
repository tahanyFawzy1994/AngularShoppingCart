import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product-list.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product/product.service';
import { ProductFilterPipe } from './product/ProductFilter.pipe';
import { StarComponent } from './shared/star.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './shared/routing.module';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailsComponent } from './product/productDetails/product-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductFilterPipe,
    StarComponent,
    WelcomeComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
