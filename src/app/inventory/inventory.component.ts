import { Component, OnInit } from '@angular/core';
import { Inventory } from '../BusinessObjects/IInventory';
import { InventoryService } from '../services/inventory/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private invService:InventoryService) { }

  allInv:Inventory[]

  ngOnInit(): void {
    this.invService.getAllInventory().subscribe(data=>this.allInv=data);
  }


}
