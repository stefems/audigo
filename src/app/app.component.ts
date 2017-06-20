import { Component } from '@angular/core';

//SERVICES
import { ApiService }      from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user = false;

  constructor(private apiService: ApiService) {
  	this.apiService.auth().subscribe(response => {
      console.log("auth gave us a response");
      this.user = response;
    });
  }
}
