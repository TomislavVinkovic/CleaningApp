import { Injectable } from '@angular/core';
import { QuestionBase } from '../../../types/forms/QuestionBase';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  constructor() {}

  toFormGroup(questions: QuestionBase<string>[]) {
    const group: any = {};
    questions.forEach((question) => {
      group[question.key] = new FormControl(question.value || '', question.validator);
    });
    return new FormGroup(group);
  }

}