import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { User } from '../../../models/user';
import { MetaPagination } from '../../../types/api/meta-pagination';
import { ClientPagination } from '../../../types/client-pagination';

@Injectable({
  providedIn: 'root'
})
export class AdminUsersService {

  constructor(
    private http: HttpClient,
  ) { }

  getUsers(
    pagination: ClientPagination
  ) {
    return this.http.get(
      'user/list',
      {
        params: {
          per_page: pagination.perPage,
          page: pagination.page
        }
      }
    ).pipe(
      map(( response : any ) => {
        return {
          data: response.data.map( (u : any) => new User(u) ),
          meta: response.meta as MetaPagination
        }
      })
    );
  }

  getUserDetails(userId: string) {
    return this.http.get(
      `user/${userId}`
    ).pipe(
      map(( response : any ) => {
        let user = new User(response.data);

        return {
          user: user,
        }
        
      })
    );
  }

  getProfileDetails() {
    return this.http.get(
      `user/details`
    ).pipe(
      map(( response : any ) => {
        let user = new User(response.data.user);

        return {
          user: user,
        }
        
      })
    );
  }

  verifyUser(userId: string) {
    return this.http.post(
      `user/${userId}/verify`, {}
    ).pipe(
      map(( response : any ) => response)
    );
  }

  deactivateUser(userId: string) {
    return this.http.post(
      `user/${userId}/deactivate`, {}
    ).pipe(
      map(( response : any ) => response)
    );
  }

  resetPassword(userId: string) {
    return this.http.post(
      `user/${userId}/reset-password`, {}
    ).pipe(
      map(( response : any ) => response)
    );
  }
}
