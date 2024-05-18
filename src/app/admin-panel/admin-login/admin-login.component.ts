import { Component, OnInit } from '@angular/core';
import { AppMaterialModule } from '../../app-material.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoComponent } from '../../shared/logo/logo.component';
import { UserLoginApiType } from '../../types/api/auth-api-types';
import { QuestionService } from '../../services/forms/question-service/question.service';
import { QuestionBase } from '../../types/forms/QuestionBase';
import { AuthService } from '../../services/auth/auth.service';
import { DynamicFormQuestionComponent } from '../../shared/forms/form-question/form-question.component';
import { QuestionControlService } from '../../services/forms/question-control/question-control.service';
import { Router } from '@angular/router';
import { SnackBarService } from '../../services/snack-bar/snack-bar.service';
import { ErrorHandlerService } from '../../services/error-handler/error-handler.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    AppMaterialModule,
    CommonModule,
    FormsModule,
    LogoComponent,
    ReactiveFormsModule,
    DynamicFormQuestionComponent,
  ],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss'
})
export class AdminLoginComponent implements OnInit {

  questions!: QuestionBase<string>[];
  form!: FormGroup;

  constructor(
    private questionService: QuestionService,
    private questionControlService: QuestionControlService,
    private authService: AuthService,
    private errorHandler: ErrorHandlerService,
    // private snackBar: SnackBarService,
    private router: Router,
  ) {}
  
  ngOnInit(): void {
      this.questions = this.questionService.getLoginQuestions();
      this.form = this.questionControlService.toFormGroup(this.questions);
  }

  getFormattedData() {
    const rawData = this.form.getRawValue();
    return new UserLoginApiType(rawData.email, rawData.password);
  }

  onSubmit() {
    const data: UserLoginApiType = this.getFormattedData();
    this.authService.login(data).subscribe({
      next: (data) => {
        this.router.navigate(['/admin']);
      },
      error: (error) => {
        this.errorHandler.handleError(error);
      }
    })
  }
}
