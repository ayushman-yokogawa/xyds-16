import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBarHorizontalPosition, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-example',
  templateUrl: './snackbar-example.component.html',
  styleUrls: ['./snackbar-example.component.scss']
})

export class SnackbarExampleComponent {
  horizontalPosition: MatSnackBarHorizontalPosition | undefined;
  constructor(private snackBar: MatSnackBar) {}
  @Input() myFunction!: () => void;

  ngOnInit(): void {
  }

  accept(){
    alert("Accept is clicked");
  }
  cancel(){
    alert("Canc is clicked");
  }

  data0 = "New test results uploaded successfully";
  data =  "The information entered are unsaved, you still wish to close ?";
  data2 = "The data entered get erased, you wish to cancel ?";

  openSnackBar(message: string) {
    this.snackBar.openFromComponent(SnackbarExampleSnackbar, {
      data: { message: this.data },
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  openSnackBar2(message: string) {
    this.snackBar.openFromComponent(SnackbarExampleSnackbarTest, {
      data: { message: this.data2 },
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }
  openSnackBar3(message: string) {
    this.snackBar.openFromComponent(SnackbarExampleSimpleSnackbarTest, {
      data: { message: this.data0 },
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

}

@Component({
  selector: 'snackbar-example-snackbar',
  templateUrl: 'snackbar-example-snackbar.html',
})

export class SnackbarExampleSnackbar {
  constructor() {}
  onMyEvent() {
   alert("Button is trigger");
  }
   accept(){
    alert("Accept is clicked");
  }
  cancel(){
    alert("Cancel is clicked");
  }
}

@Component({
  selector: 'snackbar-example-snackbartest',
  templateUrl: 'snackbar-example-snackbartest.html',
})

export class SnackbarExampleSnackbarTest {
  constructor() {}
  accept(){
    alert("Accept is clicked");
  }
  cancel(){
    alert("Cancel is clicked");
  }
  onMyEvent2(){
      alert("Delete Button is triggered");
  }
}

@Component({
  selector: 'snackbar-example-snackbar-simple',
  templateUrl: 'snackbar-example-simple-snakbar.html',
})

export class SnackbarExampleSimpleSnackbarTest {
  constructor() {}
  accept(){
    alert("Accept is clicked");
  }
  cancel(){
    alert("Cancel is clicked");
  }
  onMyEvent2(){
      alert("Delete Button is triggered");
  }
}

