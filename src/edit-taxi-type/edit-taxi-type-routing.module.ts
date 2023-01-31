import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTaxiTypeComponent } from './edit-taxi-type.component';

const routes: Routes = [{ path: '', component: EditTaxiTypeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditTaxiTypeRoutingModule { }
