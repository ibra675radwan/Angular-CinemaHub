import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)},
  {path: '404', loadComponent: () => import('./core/components/not-found/not-found.component').then(m => m.NotFoundComponent)},
  {path: 'movies', loadChildren: () => import('./features/content/content.routes').then(m => m.CONTENT_ROUTES)},
  {path: 'tv-shows', loadChildren: () => import('./features/content/content.routes').then(m => m.CONTENT_ROUTES)},
  {path: 'cinemas' , loadComponent: () => import('./core/components/Cinema/cinema/cinema.component').then(m => m.CinemaComponent)},
  {path: 'administrative' , loadComponent: () => import('./core/components/Administritive/Administritive.component').then(m => m.AdministritiveComponent)},
 {path: 'logins', loadComponent: () => import ('./core/components/login/login.component').then(m =>m.LoginComponent)},
   
                            
    

  {path: '**', redirectTo: '404'}
];
