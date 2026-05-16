import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../../language-switcher/language-switcher';

@Component({
  selector: 'app-nav',
  imports: [
    TranslateModule,
    LanguageSwitcherComponent
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  menuOpen = false;

  scrollTo(id: string) {
  this.menuOpen = false;

  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
}
