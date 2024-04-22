import { Injectable } from '@angular/core';
import { getLoginFormQuestions } from '../../../data/form-questions/logjn-form-questions';

@Injectable({
  providedIn: 'root'
})

export class QuestionService {

  constructor() {}

  getLoginQuestions() {
    return getLoginFormQuestions();
  }
}
