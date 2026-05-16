import { Component } from '@angular/core';
import { Buttons } from '../reusable/buttons/buttons';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [Buttons, TranslateModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {


}
