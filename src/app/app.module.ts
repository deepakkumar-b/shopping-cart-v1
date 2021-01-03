import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ItemHomeComponent } from './item-home/item-home.component';
import { AppRoutingModule, routes } from './app-routing.module';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SampleComponent } from './sample/sample.component';
import { SampleItemsHomeComponent } from './sample-items-home/sample-items-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ItemHomeComponent,
    SampleComponent,
    SampleItemsHomeComponent,
    ShoppingCartComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    NgbModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

