import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateListingApiType } from '../../../types/api/create-listing-api';
import { map } from 'rxjs';
import { Listing } from '../../../models/listing';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  constructor(
    private http: HttpClient
  ) { }

  createListing(data: CreateListingApiType) {
    return this.http.post('listing', data).pipe(
      map((response: any) => response)
    );
  }
}
