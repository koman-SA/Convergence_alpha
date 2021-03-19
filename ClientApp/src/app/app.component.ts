import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  sideBarOpen = true;

  constructor(private http: HttpClient) {
  }

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}
