
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'alert-Modal',
  templateUrl: './alertModal.component.html'
})
export class AlertModalComponent {
  message: string = ""
  cancelButtonText = "Cancel"
  actionButtonText = "Action"
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<AlertModalComponent>) {
    if (data) {
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
        this.actionButtonText = data.buttonText.action || this.actionButtonText;
      }
    }
    // this.dialogRef.updateSize('300px','200px')
  }

  onActionClick(): void {
    this.dialogRef.close(true);
  }

  onCancelClick(): void {
    this.dialogRef.close(false); 
  }

}