import { Injectable } from '@angular/core';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwtHelper = new JwtHelperService();

  saveToken(token: string): void {
    localStorage.setItem('token', token); // Save the token
  }

  getToken(): string | null {
    return localStorage.getItem('token'); // Retrieve token
  }

  removeToken(): void {
    localStorage.removeItem('token'); // Remove token
  }

  isAuthenticated(): boolean {
    const token = this.getToken(); 
    return token ? !this.jwtHelper.isTokenExpired(token) : false; 
  }
  getRoleId(): number | null {
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      return parsedUser.roleId || null; // Directly access `roleId` at the top level
    }
    return null;
  }

  isSuperAdmin(): boolean {
    return this.getRoleId() === 2; // Role ID 2 = SuperAdmin
  }

  isAdmin(): boolean {
    return this.getRoleId() === 1; // Role ID 1 = Admin
  }
}


