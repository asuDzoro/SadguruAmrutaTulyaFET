import { Component, OnInit } from '@angular/core';
import { Inventory } from 'src/app/BusinessObjects/IInventory';
import { InventoryService } from 'src/app/services/inventory/inventory.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detail-inventory',
  templateUrl: './detail-inventory.component.html',
  styleUrls: ['./detail-inventory.component.css']
})
export class DetailInventoryComponent implements OnInit {

  constructor(private route:ActivatedRoute, private invService:InventoryService,private location:Location,private router:Router) { }

  id:number;
  inventory:Inventory=null;

  ngOnInit(): void {
    this.route.params.subscribe((param:Params)=>this.id=param.id);
    this.invService.getInventoryById(this.id).subscribe(data=>this.inventory=data);
  }

  onBackClick(){
    this.location.back();
  }
  remove(){
    this.invService.DeleteInventory(this.inventory.Id).subscribe(data=>this.inventory=data);
    this.router.navigate(['/inventory'])
  }

}
