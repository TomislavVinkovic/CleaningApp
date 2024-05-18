import { CommonModule } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppMaterialModule } from '../../../app-material.module';

@Component({
  selector: 'app-confirm-dialog-template',
  templateUrl: './confirm-dialog-template.component.html',
  styleUrls: ['./confirm-dialog-template.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ],
})
export class ConfirmDialogTemplateComponent implements OnInit {
  defaultConfirmButtonText = 'Confirm';
  defaultCancelButtonText = 'Cancel';

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogTemplateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
    text: string,
    confirmButtonText: string,
    cancelButtonText: string,
  }) { }

  ngOnInit() {
  }

  confirm() {
    this.dialogRef.close(true);
  }

}
