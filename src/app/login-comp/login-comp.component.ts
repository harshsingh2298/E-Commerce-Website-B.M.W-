import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserServiceService } from '../Service/user-service.service';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent implements OnInit {
  ngOnInit(): void {
}
constructor(private service:UserServiceService,private route:Router){}
user:User=new User();

  loginForm=new FormGroup(
    {
      Name: new FormControl('',[Validators.required, Validators.maxLength(30), Validators.minLength(5)]),
      PhoneNo: new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(13)]),
    })
    save(){
      
      this.user.customerName=this.loginForm.value.Name!;
      this.user.phoneNo=this.loginForm.value.PhoneNo!;
      this.service.login(this.user).subscribe((x:any)=>{
       // console.log(x)
        alert("============= >>>  WELCOME USER  <<<===============");
        this.service.loginUser(x.token,this.user.customerName)
        
        this.route.navigateByUrl("dashboard")

      } )
     

    }
}
