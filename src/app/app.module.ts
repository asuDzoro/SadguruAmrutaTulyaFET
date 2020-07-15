import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AddInventoryComponent } from './inventory/add-inventory/add-inventory.component';
import { ModifyInventoryComponent } from './inventory/modify-inventory/modify-inventory.component';
import { DetailInventoryComponent } from './inventory/detail-inventory/detail-inventory.component';
import { DeleteInventoryComponent } from './inventory/delete-inventory/delete-inventory.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    AddInventoryComponent,
    ModifyInventoryComponent,
    DetailInventoryComponent,
    DeleteInventoryComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
