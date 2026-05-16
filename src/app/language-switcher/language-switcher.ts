// language-switcher.ts
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, NgClass } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [NgClass],
  template: `
    <div class="lang-switcher">
      <span
        [ngClass]="{ active: currentLang === 'es' }"
        (click)="switchLanguage('es')">ES</span>
      <span class="divider">|</span>
      <span
        [ngClass]="{ active: currentLang === 'en' }"
        (click)="switchLanguage('en')">EN</span>
    </div>
  `,
  styles: [`
    .lang-switcher {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.85rem;
      letter-spacing: 0.05em;
    }
    span {
      cursor: pointer;
      opacity: 0.4;
      transition: opacity 0.2s ease;
    }
    span:hover {
      opacity: 0.7;
    }
    span.active {
      opacity: 1;
      color: var(--light-green);
      font-weight: 500;
    }
    .divider {
      opacity: 0.3;
      cursor: default;
      pointer-events: none;
    }
  `]
})
export class LanguageSwitcherComponent {
  currentLang: string;

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.currentLang = this.translate.currentLang || 'es';
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', lang);
    }
  }
}