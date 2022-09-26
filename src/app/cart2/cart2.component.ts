import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../Service/user-service.service';

@Component({
  selector: 'app-cart2',
  templateUrl: './cart2.component.html',
  styleUrls: ['./cart2.component.css']
})
export class Cart2Component implements OnInit {

  constructor(private service:UserServiceService) { }
vehicleList:string[]=[];

  ngOnInit(): void {
      this.service.findList(localStorage.getItem('userName')).subscribe(x=>this.vehicleList=x.vehicleName);
  }

}
