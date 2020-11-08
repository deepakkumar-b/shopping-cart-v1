import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { AppComponent } from './app.component';
import { ItemHomeComponent } from './item-home/item-home.component';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SampleComponent } from './sample/sample.component';
import { SampleItemsHomeComponent } from './sample-items-home/sample-items-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ItemHomeComponent,
    SampleComponent,
    SampleItemsHomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

