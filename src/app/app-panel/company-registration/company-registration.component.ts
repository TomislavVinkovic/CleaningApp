import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppMaterialModule } from '../../app-material.module';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '../../services/error-handler/error-handler.service';
import { QuestionControlService } from '../../services/forms/question-control/question-control.service';
import { QuestionService } from '../../services/forms/question-service/question.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QuestionBase } from '../../types/forms/QuestionBase';
import { CompanyRegistrationApiType } from '../../types/api/company-registration-api';
import { DynamicFormQuestionComponent } from '../../shared/forms/form-question/form-question.component';
import { CompanyRegistrationService } from './service/company-registration.service';
import { MsgDialogService } from '../../services/msg-dialog/msg-dialog.service';

@Component({
  selector: 'app-company-registration',
  standalone: true,
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
    DynamicFormQuestionComponent,
  ],
  templateUrl: './company-registration.component.html',
  styleUrl: './company-registration.component.scss'
})
export class CompanyRegistrationComponent implements OnInit {
  
  questions!: QuestionBase<string>[];
  form!: FormGroup;

  constructor(
    private questionService: QuestionService,
    private questionControlService: QuestionControlService,
    private errorHandler: ErrorHandlerService,
    private companyRegistrationService: CompanyRegistrationService,
    private msg: MsgDialogService,
    private router: Router,
  ) {}

  ngOnInit(): void {
      this.questions = this.questionService.getCompanyRegistrationQuestions();
      this.form = this.questionControlService.toFormGroup(this.questions);
  }

  getFormattedData() {
    const rawData = this.form.getRawValue();
    return new CompanyRegistrationApiType(rawData);
  }

  onSubmit() {
    const data: CompanyRegistrationApiType = this.getFormattedData();
    this.companyRegistrationService.registerCompany(data).subscribe({
      next: (response) => {
        this.msg.open(response.data.message);
        this.router.navigate(['/app/home']);
      },
      error: (error) => {
        this.errorHandler.handleError(error);
      }
    })
  }

}
