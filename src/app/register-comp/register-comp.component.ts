import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserServiceService } from '../Service/user-service.service';

@Component({
  selector: 'app-register-comp',
  templateUrl: './register-comp.component.html',
  styleUrls: ['./register-comp.component.css']
})
export class RegisterCompComponent implements OnInit {
  constructor(private service:UserServiceService, private route:Router) { }

  user:User=new User();

  registerForm=new FormGroup(
    {
      Name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(13)]),
      PhoneNo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]),
      Address: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(13)])
    }
  )
  save(){
    this.user.customerName=this.registerForm.value.Name!;
    this.user.phoneNo=this.registerForm.value.PhoneNo!;
    this.user.address=this.registerForm.value.Address!;
    this.service.register(this.user).subscribe(x=>console.log(x))
    alert("============ >>>  User Registered  <<<===============");
    this.route.navigateByUrl("login")
  }

  ngOnInit() {
  }
}

