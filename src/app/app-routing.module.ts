import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderEditComponent } from './order-list/order-edit.component';

const routes: Routes = [{
  path : 'edit/:id', component:OrderEditComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
