import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'welcome to the app';
  data = 'my dynamic data';
  getValue() {
    return 'hello this interporation';
  }
}
