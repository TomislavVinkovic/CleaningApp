import { Injectable } from '@angular/core';
import { getLoginFormQuestions } from '../../../data/form-questions/login-form-questions';
import { getCompanyRegistrationFormQuestions } from '../../../data/form-questions/company-registration-form-questions';
import { getCreateListingFormQuestions } from '../../../data/form-questions/create-listing-form-questions';

@Injectable({
  providedIn: 'root'
})

export class QuestionService {

  constructor() {}

  getLoginQuestions() {
    return getLoginFormQuestions();
  }

  getCompanyRegistrationQuestions() {
    return getCompanyRegistrationFormQuestions();
  }

  getCreateListingQuestions() {
    return getCreateListingFormQuestions();
  }
}
