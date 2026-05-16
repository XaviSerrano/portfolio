import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-studies',
  imports: [RevealDirective, TranslateModule],
  templateUrl: './studies.html',
  styleUrl: './studies.css',
})
export class Studies {

}
