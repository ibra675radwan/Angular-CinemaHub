import { CanActivateFn } from '@angular/router';
import { CanActivate, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';




export const SuperAdminGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService);


  if (authService.isSuperAdmin()) {
    return true; // Allow access
  }

  alert('Access Denied: Only SuperAdmins can access this page.');
  router.navigate(['/login']); // Redirect if not SuperAdmin
  return false;
};