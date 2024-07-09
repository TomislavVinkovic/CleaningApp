import { inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { CanActivateFn, Router } from '@angular/router';
import { filter, take, map } from 'rxjs';
import { AuthService } from '../../services/api/auth/auth.service';
import { Role } from '../../app_constants';

export const adminLoginGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  
  return toObservable(auth.user).pipe(
    filter(user => user !== undefined), // Wait until the user is either fetched or confirmed to be null
    take(1), // Take the first emitted non-undefined value
    map(user => {

      // if the user is logged in redirect to dashboard page
      if(!!user) {
        if(auth.isSuperUser()) {
          router.navigate(['/admin/dashboard']);
          return false;
        }
        if(auth.isNormalUser()) {
          router.navigate(['/app/dashboard']);
          return false;
        }
      }
      // otherwise, go to the login page
      return true;
      
    })
  );
};
