import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'

})
export class AppComponent {
  userData: any = [
    { id: "0", name: "Warren", type: "test" }
  ];

  constructor() {

    console.log(this.userData);
  }

}
