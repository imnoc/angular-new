import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsersService } from './users.service';

export const guardGuard: CanActivateFn = (route, state) => {
  const userservice = inject(UsersService)
  const router = new Router();
  if (userservice.CheckUserValid()) {
    return true;
  }
  else {
    router.navigate(['signin'])
    return false;
  }
};
