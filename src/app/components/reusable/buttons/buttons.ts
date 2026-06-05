import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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

  constructor(private translate: TranslateService) {}

  copyEmail() {
    navigator.clipboard.writeText(this.email);
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 2000);
  }

  openCV() {
    const lang = this.translate.currentLang;

    const cvPath = 
      lang === 'en' 
        ? 'assets/docs/CVXavierSerranoEN.pdf'
        : 'assets/docs/CVXavierSerrano.pdf';

    window.open(cvPath, '_blank');
  }
}
