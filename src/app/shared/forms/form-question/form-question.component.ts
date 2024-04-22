import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { AppMaterialModule } from '../../../app-material.module';
import { FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { QuestionBase } from '../../../types/forms/QuestionBase';

@Component({
  selector: 'app-form-question',
  standalone: true,
  imports: [CommonModule, AppMaterialModule, ReactiveFormsModule, FormsModule],
  templateUrl: './form-question.component.html',
  styleUrl: './form-question.component.scss'
})
export class DynamicFormQuestionComponent {
  question = input.required<QuestionBase<any>>();
  form = input.required<FormGroup>();

  get isValid() {
    return this.form().controls[this.question().key].valid;
  }
}
