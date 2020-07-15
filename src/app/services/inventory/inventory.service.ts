import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Inventory } from '../../BusinessObjects/IInventory'

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http:HttpClient) { }

  private API = 'http://localhost:54999/api';
  private INVENTORY_API = `${this.API}/inventory/`;

  getAllInventory():Observable<Array<Inventory>>{
    return this.http.get<Array<Inventory>>(this.INVENTORY_API);
  }

  getInventoryById(Id:number):Observable<Inventory>{
    return this.http.get<Inventory>(this.INVENTORY_API+Id);
  }

  SaveInventory(inventory:Inventory):Observable<Inventory>{
    let result : Observable<Inventory>;
    console.log(inventory.Id);
    if(inventory.Id){
      return this.http.put<Inventory>(`${this.INVENTORY_API}/${inventory.Id}`,inventory);
    }
    else{
      return this.http.post<Inventory>(this.INVENTORY_API,inventory);
    }
  }

  DeleteInventory(id:number):Observable<Inventory>{
    return this.http.delete<Inventory>(`${this.INVENTORY_API}/${id.toString()}`);
  }

}



