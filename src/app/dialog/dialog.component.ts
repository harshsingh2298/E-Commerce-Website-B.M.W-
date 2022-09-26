import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { Vehicle } from '../model/vehicle';
import { UserServiceService } from '../Service/user-service.service';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private route:Router ,private service:UserServiceService,public dailog: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    vehicle:Vehicle=new Vehicle();
    updateForm=new FormGroup({
      Price:new FormControl(''),
      Model:new FormControl(''),
      image:new FormControl(''),
      Name:new FormControl('')
      

    })

  ngOnInit(): void {
    console.log(this.data);
    this.updateForm.get("Price")?.setValue(this.data.vehiclePrice);
    this.updateForm.get("Model")?.setValue(this.data.vehicleModel);
    this.updateForm.get("Name")?.setValue(this.data.vehicleName);
    // this.service.getAllVehicle().subscribe(x=>
    //   {
    //     this.vehicle=x;
    //     console.log(this.vehicle)
    //   })

  }
  update(){
    this.data.vehiclePrice=this.updateForm.value.Price!;
     this.data.vehicleModel=this.updateForm.value.Model!;
    this.service.update(this.data).subscribe(x=>{
      console.log(x)
      alert("============ >>>  UPDATED  <<<===============");
      this.route.navigateByUrl("dashboard")
  })
}
delete(){
  console.log(this.data);
 this.service.delete(this.data).subscribe(x=>{
   console.log(x)
   alert("============ >>>  Deleted  <<<===============");
   this.route.navigateByUrl("dashboard")
})
}
  
}