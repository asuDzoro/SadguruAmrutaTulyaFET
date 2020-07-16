import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InventoryComponent} from './inventory/inventory.component';
import {AddInventoryComponent} from './inventory/add-inventory/add-inventory.component';
import {DetailInventoryComponent} from './inventory/detail-inventory/detail-inventory.component';
import {ModifyInventoryComponent} from './inventory/modify-inventory/modify-inventory.component';



const routes: Routes = [
  {path:"",component:InventoryComponent},
  {path:"inventory",component:InventoryComponent},
  {path:"inventory/add",component:AddInventoryComponent},
  {path:"inventory/modify/:id",component:ModifyInventoryComponent},  
  {path:"inventory/delete/:id",component:InventoryComponent},  
  {path:"inventory/detail/:id",component:DetailInventoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
