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
import { ListingService } from '../../services/api/listing/listing.service';
import { QuestionBase } from '../../types/forms/QuestionBase';
import { CreateListingApiType } from '../../types/api/create-listing-api';

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

  getFormattedData() {
    const rawData = this.form.getRawValue();
    rawData.listingCategory = rawData.listingCategoryService ? 
      rawData.listingCategoryService : rawData.listingCategoryProduct;
    rawData.durationDays = rawData.listingKercherRentDays;

    return new CreateListingApiType(rawData);
  }

  onSubmit() {
    const data: CreateListingApiType = this.getFormattedData();
    this.listingService.createListing(data).subscribe({
      next: (response) => {
        this.msg.open(response.data.message);
        this.router.navigate(['/app/home']);
      },
      error: (error) => {
        this.errorHandler.handleError(error);
      }
    });
  }
}
