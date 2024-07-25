import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})

export class HeaderComponent {
  activeLink: string = '';
  menuOpen: boolean = false;

  setActiveLink(link: string): void {
    this.activeLink = link;
    setTimeout(() => {
      this.menuOpen = false;
    }, 1000);
  };

  toggleMenu() { this.menuOpen = !this.menuOpen; }

  translate = inject(TranslateService)

  switchLanguage(language: string) {
    this.translate.setDefaultLang('en')
    this.translate.use(language);
  }





}
