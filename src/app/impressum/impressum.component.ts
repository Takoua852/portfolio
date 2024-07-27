import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [CommonModule,HeaderComponent,TranslateModule],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {

}
