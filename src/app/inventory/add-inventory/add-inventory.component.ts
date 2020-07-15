import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory/inventory.service';
import { Inventory } from 'src/app/BusinessObjects/IInventory';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {

  inventory:Inventory=null;
  constructor(private invService:InventoryService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    this.invService.SaveInventory(form).subscribe(data=>this.inventory = data);
    this.router.navigate(['/inventory'])

  }

}
