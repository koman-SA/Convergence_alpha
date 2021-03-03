import { Component } from '@angular/core';

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
