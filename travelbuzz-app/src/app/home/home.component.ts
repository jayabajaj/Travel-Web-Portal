import { Component } from '@angular/core';
import { User } from './user.interface';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  //   styleUrls: ['./app.component.css']
})
export class HomeComponent {
  public user: User;

  public trip = [
    { value: 'single-trip', display: 'Single Trip' },
    { value: 'round-trip', display: 'Round Trip' }
  ];

  ngOnInit(){
    this.user = {
      trip: this.trip[0].value
    }
  }
}