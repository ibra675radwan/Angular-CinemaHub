import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';  // Ensure AuthService is imported correctly
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AuthGuard,
        AuthService,
      ],
    });

    authGuard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });

  it('should allow navigation if authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);  // Mocking the authentication check
    spyOn(router, 'navigate');  // Mocking the navigate method

    // Test the canActivate method to see if navigation is allowed
    const result = authGuard.canActivate();
    expect(result).toBe(true);
    expect(router.navigate).not.toHaveBeenCalled();  // Check if navigate was not called
  });

  it('should block navigation if not authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(false);  // Mocking the authentication check
    spyOn(router, 'navigate');  // Mocking the navigate method

    // Test the canActivate method to see if navigation is blocked
    const result = authGuard.canActivate();
    expect(result).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/login']);  // Check if it redirects to login
  });
});
