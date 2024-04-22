import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { filter, take, map } from 'rxjs';
import {toObservable} from "@angular/core/rxjs-interop";


export const adminAuthGuard: CanActivateFn = (next, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  
  return toObservable(auth.user).pipe(
    filter(user => user !== undefined), // Wait until the user is either fetched or confirmed to be null
    take(1), // Take the first emitted non-undefined value
    map(user => {
      
      if(auth.isSuperUser()) {
        return true;
      }
      else {
        router.navigate(['/admin/login']);
        return false;
      }
    })
  );
};
