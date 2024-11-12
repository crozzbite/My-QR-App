import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My-QR-App';
  path = '../assets/qr-code-component-main/images/image-qr-code.png';
  header = "Improve your front-end skills by buildig proyects";
  paragraf = "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
}
