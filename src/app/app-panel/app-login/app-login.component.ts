import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '../../services/error-handler/error-handler.service';
import { QuestionControlService } from '../../services/forms/question-control/question-control.service';
import { QuestionService } from '../../services/forms/question-service/question.service';
import { UserLoginApiType } from '../../types/api/auth-api';
import { QuestionBase } from '../../types/forms/QuestionBase';
import { AppMaterialModule } from '../../app-material.module';
import { CommonModule } from '@angular/common';
import { DynamicFormQuestionComponent } from '../../shared/forms/form-question/form-question.component';
import { LogoComponent } from '../../shared/logo/logo.component';
import { AuthService } from '../../services/api/auth/auth.service';

@Component({
  selector: 'app-app-login',
  standalone: true,
  imports: [
    AppMaterialModule,
    CommonModule,
    FormsModule,
    LogoComponent,
    ReactiveFormsModule,
    DynamicFormQuestionComponent,
  ],
  templateUrl: './app-login.component.html',
  styleUrl: './app-login.component.scss'
})
export class AppLoginComponent implements OnInit {
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
        this.router.navigate(['/app/dashboard']);
      },
      error: (error) => {
        this.errorHandler.handleError(error);
      }
    })
  }
}
