import { Component, AfterViewInit, OnDestroy, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Buttons } from '../reusable/buttons/buttons';
import { RevealDirective } from '../../shared/reveal';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.html',
  styleUrls: ['./introduction.css'],
  imports: [FontAwesomeModule, Buttons],
})
export class Introduction implements AfterViewInit, OnDestroy {

  private observer?: IntersectionObserver;
  private isBrowser: boolean;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    if (!this.isBrowser) return;

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
    this.observer?.disconnect();
  }

}
