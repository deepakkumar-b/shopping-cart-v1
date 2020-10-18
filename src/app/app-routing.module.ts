import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ItemHomeComponent } from './item-home/item-home.component';
import { SampleComponent } from './sample/sample.component';
import { SampleItemsHomeComponent } from './sample-items-home/sample-items-home.component';

const routes: Routes = [
  {path: 'item-home', component: ItemHomeComponent},
  {path: 'sample', component: SampleComponent},
  {path: 'sample-items', component: SampleItemsHomeComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
