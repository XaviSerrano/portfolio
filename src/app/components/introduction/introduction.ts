import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.html',
  imports: [FontAwesomeModule],
  styleUrl: './introduction.css',
})
export class Introduction {
  faCopy = faCopy;
  faCheck = faCheck;
  copied = false;
  email = "xserrano2001@gmail.com";

copyEmail() {
  navigator.clipboard.writeText(this.email);
  this.copied = true;
  setTimeout(() => this.copied = false, 2000);
}


  
  openCV() {
    window.open('/assets/docs/XavierSerranoCV.pdf', '_blank');
  }
}


