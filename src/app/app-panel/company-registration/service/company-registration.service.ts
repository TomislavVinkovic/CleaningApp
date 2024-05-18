import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CompanyRegistrationApiType } from '../../../types/api/company-registration-api';

@Injectable({
  providedIn: 'root'
})
export class CompanyRegistrationService {

  constructor(
    private http: HttpClient
  ) { }

  registerCompany(data: CompanyRegistrationApiType) {
    return this.http.post('company', data).pipe(
      map((response: any) => response),
    );
  }
}