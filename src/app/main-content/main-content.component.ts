import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HomeComponent,
    AboutComponent, SkillsComponent, PortfolioComponent,
    ContactComponent, CommonModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})

export class MainContentComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    console.log('language used:', language);

  }
}
