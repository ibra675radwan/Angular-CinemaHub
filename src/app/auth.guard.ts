import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      const roleId = parsedUser.roleId;

      if (roleId === 1 || roleId === 2) { // Example: Admin or SuperAdmin roles
        return true;
      } else {
        this.router.navigate(['/access-denied']);
        return false;
      }
    }

    this.router.navigate(['/login']);
    return false;
  }
}
