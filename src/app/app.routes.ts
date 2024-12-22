import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { SuperAdminGuard } from './superadmin.guard';


export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
  { path: '404', loadComponent: () => import('./core/components/not-found/not-found.component').then(m => m.NotFoundComponent) },
  
  // Protected Routes
  { path: 'administrative', loadComponent: () => import('./core/components/Administritive/Administritive.component').then(m => m.AdministritiveComponent), canActivate: [AuthGuard] },
  { path: 'addCinema', loadComponent: () => import('./core/components/AddCinema/AddCinema.component').then(m => m.AddCinemaComponent), canActivate: [SuperAdminGuard] },

  // Public Routes
  { path: 'login', loadComponent: () => import('./core/components/login/login.component').then(m => m.LoginComponent) },
  { path: 'movies', loadChildren: () => import('./features/content/content.routes').then(m => m.CONTENT_ROUTES) },
  { path: 'tv-shows', loadChildren: () => import('./features/content/content.routes').then(m => m.CONTENT_ROUTES) },
  { path: 'cinemas', loadComponent: () => import('./core/components/Cinema/cinema/cinema.component').then(m => m.CinemaComponent) },

  // Fallback Route
  { path: '**', redirectTo: '404' }
];
