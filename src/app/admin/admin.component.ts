import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { User } from '../model/user';
import { UserServiceService } from '../Service/user-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(private service:UserServiceService,private route:Router, private dialog:MatDialog, public dailog2: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data1: any){}
  user:User=new User();
  
  AdminForm=new FormGroup(
      {
        Name: new FormControl('',[Validators.required, Validators.maxLength(30), Validators.minLength(5)]),
        PhoneNo: new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(13)]),
      })
      save(){
        
        this.user.customerName=this.AdminForm.value.Name!;
        this.user.phoneNo=this.AdminForm.value.PhoneNo!;
        this.service.login(this.user).subscribe(x=>{
          console.log(x)
          alert("============ >>> WELCOME ADMIN <<<===============");
          this.dialog.open(DialogComponent,{data:this.data1})
         
        })
       
  
      }
}
