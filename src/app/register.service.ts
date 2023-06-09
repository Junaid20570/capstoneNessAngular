import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  customerProfile(user: User) {
    return this.http.post<User>("http://localhost:5555/user/na/findById",user)
  }
  constructor(private http:HttpClient) {}

  genToken(loginUser: User) {
    return this.http.post<string>("http://localhost:5555/user/na/login",loginUser,{responseType:'text' as 'json'})
  }
  loginCustomer(token:string, loginUser:User) {
    let mytoken='Bearer '+token
    let head=new HttpHeaders().set('Authorization',mytoken)
    return this.http.post<User>("http://localhost:5555/user/login",loginUser,{headers:head})
  }

  registerCustomer(newUser: User) {
    return this.http.post<User>("http://localhost:5555/user/na/signup",newUser)
  }

  //update needs token
  resetPassword(updatePassUser : User){
    return this.http.put<string>(`http://localhost:5555/user/na/reset`,updatePassUser)
  }

  forgotPass(mail:string){
    return this.http.get<User>(`http://localhost:5555/user/na/forgot/${mail}`)
  }
}
