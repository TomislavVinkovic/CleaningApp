import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { computed, Injectable, signal, WritableSignal } from '@angular/core';
import { map, pipe, switchMap, tap } from 'rxjs';
import { UserLoginApiType } from '../../types/api/auth-api-types';
import { User } from '../../models/user';
import { Role } from '../../app_constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) {
    // try to fetch the user data
    this.http.get('user/details').pipe(
      map((response: any)=> {
        this._loggedInUser.set(new User(response.data));
      })
    ).subscribe({
      error: (error: HttpErrorResponse) => {
        if(error.status == 401) {
          this._loggedInUser.set(null);
        }
      }
    });
  }

  // undefined: auth service has not attempted to login yet
  // null: auth service has attempted to re-login after page refresh, but the login failed
  // User: the user is authenticated.

  private _loggedInUser: WritableSignal<User|null|undefined> = signal(undefined);
  public user = computed(() => this._loggedInUser());

  
  public isSuperUser = computed(() => 
    this._loggedInUser() && this._loggedInUser()?.roles?.includes(Role.ROLE_ADMIN)
  );
  public isNormalUser = computed(() =>
    this._loggedInUser() && this._loggedInUser()?.roles?.includes(Role.ROLE_USER)
  );

  login(login: UserLoginApiType) {
    return this.http.get('sanctum/csrf-cookie').pipe(
      switchMap(_ => {
        return this.http.post('login', login);
      }),
      switchMap(_ => {
          return this.http.get('user/details');
      }),
      map((response: any) => {
        this._loggedInUser.set(new User(response.data));
      })
    );
  }

  logout() {
    return this.http.post('logout', {}).pipe(
      tap(_ => {
        this._loggedInUser.set(null);
      })
    )
  }
}
