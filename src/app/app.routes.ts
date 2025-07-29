import { Routes } from '@angular/router';
import { MaccProfilePageComponent } from './macc-profile-page/macc-profile-page.component';

export const routes: Routes = [
  //Home
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    title: 'Home',
    component: MaccProfilePageComponent,
  },
];
