import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-sofi';
  buttonPressed = false;

  onButtonPressed(): void {
    this.buttonPressed = !this.buttonPressed;
  }

}
