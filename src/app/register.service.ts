import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  loginCustomer(loginUser: User) {
    return this.http.post<User>("http://localhost:8080/user/login",loginUser)
  }

  constructor(private http:HttpClient) {}

  registerCustomer(newUser: User) {
    return this.http.post<User>("http://localhost:8080/user/signup",newUser)
  }

  resetPassword(updatePassUser : User){
    return this.http.put<string>("http://localhost:8080/user/update",updatePassUser)
  }
}
