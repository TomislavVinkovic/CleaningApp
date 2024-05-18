import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ClientPagination } from '../../../types/client-pagination';
import { Listing } from '../../../models/listing';

@Injectable({
  providedIn: 'root'
})
export class AdminListingsService {

  constructor(
    private http: HttpClient
  ) { }

  getListings(pagination: ClientPagination) {
    return this.http.get(
      'admin/listing',
      {
        params: {
          per_page: pagination.perPage,
          page: pagination.page
        }
      }
    ).pipe(
      map((response: any) => {
        return {
          data: response.data.map((listing: any) => new Listing(listing)),
          meta: response.meta
        }
      })
    );
  }

  getListingDetails(listingId: string) {
    return this.http.get(
      `admin/listing/${listingId}`
    ).pipe(
      map((response: any) => response)
    );
  }

  deleteListing(listingId: string) {
    return this.http.delete(
      `admin/listing/${listingId}`
    );
  }
}
