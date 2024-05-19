import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Offer } from '../../../models/offer';

@Injectable({
  providedIn: 'root'
})
export class AppOffersService {

  constructor(
    private http: HttpClient
  ) { }

  getOffers(pagination: any) {
    return this.http.get('offer', {
      params: pagination
    }).pipe(map((response: any) => {
      return {
        data: response.data.map((offer : any) => new Offer(offer)),
        meta: response.meta
      }
    }));
  }

  getOfferDetails(offerId: string) {
    return this.http.get(`offer/${offerId}`).pipe(map((response: any) => {
      return {
        offer: new Offer(response.data)
      }
    }));
  }
}
