import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory/inventory.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Inventory } from 'src/app/BusinessObjects/IInventory';

@Component({
  selector: 'app-modify-inventory',
  templateUrl: './modify-inventory.component.html',
  styleUrls: ['./modify-inventory.component.css']
})
export class ModifyInventoryComponent implements OnInit {

  inventory:Inventory=null;
  id:number;
  constructor(private invService:InventoryService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((param:Params)=>this.id=param.id);
    this.invService.getInventoryById(this.id).subscribe(data=>this.inventory=data);
  }

  onSubmit(form:any){
    this.invService.SaveInventory(this.inventory).subscribe(data=>this.inventory = data);
    this.router.navigate(['/inventory/detail',this.inventory.Id])

  }

}
