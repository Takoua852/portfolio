import {  Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { MainContentComponent } from './main-content/main-content.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';


export const routes: Routes = [{ path: '', component: MainContentComponent },
{ path: 'impressum', component: ImpressumComponent },
{ path: 'privacy-policy', component: PrivacyPolicyComponent },
];

