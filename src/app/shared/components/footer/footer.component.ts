import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {  RouterModule, RouterOutlet,RouterLinkActive,RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule,RouterModule,RouterOutlet,RouterLinkActive,RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent {
  scrollToTop(){ window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
}
}
