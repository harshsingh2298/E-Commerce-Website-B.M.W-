import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from '../model/vehicle';
import { UserServiceService } from '../Service/user-service.service';

@Component({
  selector: 'app-cart-comp',
  templateUrl: './cart-comp.component.html',
  styleUrls: ['./cart-comp.component.css']
})
export class CartCompComponent implements OnInit {

  constructor(private service:UserServiceService) { }
@Input() vehicleName:string="";
retrieveImage: any;
  vehical:Vehicle=new Vehicle();
  ngOnInit(): void {
    
    this.service.findVehicle(this.vehicleName).subscribe(x=>{this.vehical=x
      this.retrieveImage = 'data:image/jpg;base64,' +x.image;
    })
  }
 
}
