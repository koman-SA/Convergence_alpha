import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'

})
export class AppComponent {
  dataSource = [];
  displayedColumns = ['id', 'name', 'type'];

  constructor() {

    
  }

}
