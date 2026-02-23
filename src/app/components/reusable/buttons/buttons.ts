import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-buttons',
  imports: [FontAwesomeModule],
  templateUrl: './buttons.html',
  styleUrl: './buttons.css',
})
export class Buttons {
  faCopy = faCopy;
  faCheck = faCheck;
  copied = false;
  email = 'xserrano2001@gmail.com';

  copyEmail() {
    navigator.clipboard.writeText(this.email);
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 2000);
  }

  openCV() {
    window.open('/assets/docs/XavierSerranoCV.pdf', '_blank');
  }
}
