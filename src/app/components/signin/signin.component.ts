import { Component } from '@angular/core';
import { UsersService } from '../../users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor(private userservice: UsersService) { }
  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
  router = new Router()
  users: IUser[] = []
  ngOnInit() {
    if (this.userservice.CheckUserValid()) {
      this.router.navigate(['/ss'])
    }
  }
  onSubmit = () => {
    this.userservice.Signin(this.userForm.value as IUser).subscribe(data => {
      localStorage.setItem('token', data?.accessToken)
      alert('dang nhap thanh cong')
      this.router.navigate([''])
    })
  }


}
