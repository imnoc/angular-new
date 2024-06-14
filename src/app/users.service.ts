import { Injectable } from '@angular/core';
import { IUser } from './interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  API_URL: string = 'http://localhost:3000';

  Signup(data: IUser): Observable<any> {
    return this.http.post(this.API_URL + '/signup', data)
  }

  Signin(data: IUser): Observable<any> {
    return this.http.post(this.API_URL + '/signin', data)
  }
  CheckUserValid = ():boolean=>{
    let check = false
    const token:string = localStorage.getItem('token') as string;
    try {
      const decoded:any = jwtDecode(token)
      if ((decoded.exp > (Date.now()/1000))&&(decoded.sub==1)){
        check = true
      }
    } catch (error) {
      console.log(error);
    }
    return check
}
}
