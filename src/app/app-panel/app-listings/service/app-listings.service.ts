import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Listing } from '../../../models/listing';
import { ClientPagination } from '../../../types/client-pagination';

@Injectable({
  providedIn: 'root'
})
export class AppListingsService {

  constructor(
    private http: HttpClient
  ) { }

  getListings(pagination: ClientPagination) {
    return this.http.get(
      'listing',
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
      `listing/${listingId}`
    ).pipe(
      map((response: any) => {
        return {
          listing: new Listing(response.data)
        }
      })
    );
  }

  makeOffer(listingId: string, price: number) {
    return this.http.post(
      `offer`,
      {
        listing_id: listingId,
        price: (Math.round(price * 100) / 100).toFixed(2).toString()
      }
    ).pipe(map((response: any) => response));
  }
}
