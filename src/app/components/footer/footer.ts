import { Component } from '@angular/core';
import { FontAwesomeModule, FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  imports: [FaIconComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  faCopy = faCopy;
  faCheck = faCheck;
  copied = false;
  email = "xserrano2001@gmail.com";

  copyEmail() {
    navigator.clipboard.writeText(this.email);
    this.copied = true;
    console.log(this.copied)
    setTimeout(() => {
    this.copied = false,
    console.log(this.copied)
  }
    , 2000);
  }

  openCV() {
    window.open('/assets/docs/XavierSerranoCV.pdf', '_blank');
  }
}
