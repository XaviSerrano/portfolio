import { Component, AfterViewInit, OnDestroy, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.html',
  styleUrls: ['./introduction.css'],
  imports: [FontAwesomeModule],
})
export class Introduction implements AfterViewInit, OnDestroy {
  faCopy = faCopy;
  faCheck = faCheck;
  copied = false;
  email = 'xserrano2001@gmail.com';

  private observer?: IntersectionObserver;
  private isBrowser: boolean;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    // Detectamos si estamos en navegador
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    if (!this.isBrowser) return; // No ejecutar en SSR

    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          entry.target.classList.toggle('visible', entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    this.el.nativeElement
      .querySelectorAll('.reveal')
      .forEach((el: Element) => this.observer!.observe(el));
  }

  ngOnDestroy() {
    this.observer?.disconnect(); // Safe si no se creó
  }

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
