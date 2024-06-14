import { Component } from '@angular/core';
import { UsersService } from '../../users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private userservice: UsersService) { }
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
  router=new Router()
  users: IUser[] = []
  onSubmit = () => {
    this.userservice.Signup(this.userForm.value as IUser).subscribe(data => {
      alert('dang ki thanh cong')
      this.router.navigate(['/signin'])
    })
  }
}
