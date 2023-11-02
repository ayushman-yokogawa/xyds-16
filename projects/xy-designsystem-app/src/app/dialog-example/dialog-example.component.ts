import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';


export interface DialogData {
  name: string,
  title: string,
  description: string,
  actionButtonText: string,
}

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss']
})
export class DialogExampleComponent {
  
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogExampleDialog, {
      autoFocus: false,
      data : {
        name: "deleteProduct",
        title: "Are you sure you want to delete this product?",
        description: "If you continue, the product with ID",
        actionButtonText: "Delete",
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-example-dialog',
  templateUrl: 'dialog-example-dialog.html',
})
export class DialogExampleDialog {
  constructor(private dialogRef: MatDialogRef<DialogExampleDialog>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onClickOK($event: MouseEvent) {
    this.dialogRef.close();
  }

  onMyEvent(){
    alert("hello");
  }

  onClickCancel($event: MouseEvent) {
    this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
