import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { UserServiceService } from '../Service/user-service.service';
import { Vehicle } from '../model/vehicle';
import { MatDialog } from '@angular/material/dialog';
import { AdminComponent } from '../admin/admin.component';
import { UserDto } from '../model/user-dto';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
 

  constructor(private service:UserServiceService, private dialog:MatDialog) {}

  ngOnInit(){
    this.service.getAllVehicle().subscribe(x=>
      {
        this.vehicle=x;
        console.log(this.vehicle)
      })
  }
  
  vehicle:Vehicle[]=[];
  userdto :UserDto = new UserDto();

  getVehicle()
  {
    
  }
  update(value:any){
    this.dialog.open(AdminComponent,{ data: value})
  }

  delete(value:any){
    this.dialog.open(AdminComponent)
  }
addCart(data:any){
  this.userdto.userName=localStorage.getItem('userName')!;
  this.userdto.vehicleName=data.vehicleName;
  this.service.add(this.userdto).subscribe(x=>alert("===============> ADDED TO CART <==============="))
}
}

