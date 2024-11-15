import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionComponent } from './collection/collection.component';
import { ProductsComponent } from './products/products.component';
import { ProductAvailableComponent } from './product-available/product-available.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    ProductsComponent,
    ProductAvailableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
