import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../app-material.module';
import { DynamicFormQuestionComponent } from '../../shared/forms/form-question/form-question.component';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '../../services/error-handler/error-handler.service';
import { QuestionControlService } from '../../services/forms/question-control/question-control.service';
import { QuestionService } from '../../services/forms/question-service/question.service';
import { MsgDialogService } from '../../services/msg-dialog/msg-dialog.service';
import { CompanyRegistrationService } from '../company-registration/service/company-registration.service';
import { ListingService } from '../../services/listing/listing.service';
import { QuestionBase } from '../../types/forms/QuestionBase';

@Component({
  selector: 'app-create-listing',
  standalone: true,
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
    DynamicFormQuestionComponent,
  ],
  templateUrl: './create-listing.component.html',
  styleUrl: './create-listing.component.scss'
})
export class CreateListingComponent implements OnInit {
  constructor(
    private questionService: QuestionService,
    private questionControlService: QuestionControlService,
    private errorHandler: ErrorHandlerService,
    private listingService: ListingService,
    private msg: MsgDialogService,
    private router: Router,
  ) {}

  questions!: QuestionBase<string>[];
  form!: FormGroup;

  ngOnInit(): void {
    this.questions = this.questionService.getCreateListingQuestions();
    
    this.form = this.questionControlService.toFormGroup(this.questions);
  }

  onSubmit() {
    // TODO: implement on submit
  }
}
