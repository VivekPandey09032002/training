import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  getName(name: string) {
    alert('function called ' + name);
  }

  getValue(inputElement: HTMLInputElement, nameElement: HTMLHeadElement) {
    nameElement.innerText = inputElement.value;
    console.log('changed text');
  }
  printValue(name: string) {
    console.log('heading value ' + name);
  }
}
