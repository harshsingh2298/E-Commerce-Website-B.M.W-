import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { List } from '../model/list';
import { User } from '../model/user';
import { UserDto } from '../model/user-dto';
import { Vehicle } from '../model/vehicle';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  url="http://localhost:9000/customer/register"

  register(data:User){
    return this.http.post<User>(this.url,data)
  }
  url1="http://localhost:9000/customer/login"
  login(data1:any)
  {
    return this.http.post(this.url1,data1)
  }

  url2="http://localhost:9000/vehicle/showAll"

  getAllVehicle()
  {
    return this.http.get<Vehicle[]>(this.url2)
  }


  url3="http://localhost:9000/vehicle/update"


update(data3:Vehicle){
  return this.http.put<Vehicle>(this.url3,data3)
}

  url4="http://localhost:9000/vehicle/delete"

delete(data4:any){
  console.log(data4);
  return this.http.delete(this.url4,data4)

}

   url5="http://localhost:9000/vehicle/addCart"

   add(data:UserDto){
    return this.http.post<UserDto>(this.url5,data)
   }

   loginUser(token:any, userName: any){
    localStorage.setItem("token",token);
    localStorage.setItem("userName", userName);
    // this.router.navigateByUrl("");
    return true;
  }
  findList(userName:any){
    return this.http.get<List>("http://localhost:9000/vehicle/getCart/"+userName)
  }

  findVehicle(userName:any){
    return this.http.get<Vehicle>("http://localhost:9000/vehicle/getVehicle/"+userName)
  }
}
