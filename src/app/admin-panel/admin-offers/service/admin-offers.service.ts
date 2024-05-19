import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientPagination } from '../../../types/client-pagination';
import { map } from 'rxjs';
import { Offer } from '../../../models/offer';

@Injectable({
  providedIn: 'root'
})
export class AdminOffersService {

  constructor(
    private http: HttpClient
  ) { }

  getOffers(pagination: ClientPagination) {
    return this.http.get(
      'admin/offer',
      {
        params: {
          per_page: pagination.perPage,
          page: pagination.page
        }
      }
    ).pipe(
      map((response: any) => {
        return {
          data: response.data.map((listing: any) => new Offer(listing)),
          meta: response.meta
        }
      })
    );
  }

  getOfferDetails(offerId: string) {
    return this.http.get(
      `admin/offer/${offerId}`
    ).pipe(
      map((response: any) => {
        return {
          listing: new Offer(response.data)
        }
      })
    );
  }

  deleteOffer(offerId: string) {
    return this.http.delete(
      `admin/offer/${offerId}`
    ).pipe(map((response: any) => response));
  }
}
