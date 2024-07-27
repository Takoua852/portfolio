import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule,HeaderComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
