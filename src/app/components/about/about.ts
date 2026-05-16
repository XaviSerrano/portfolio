import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  imports: [RevealDirective, TranslateModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
