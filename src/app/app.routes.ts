import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PetBioComponent } from './components/pet-bio/pet-bio.component';
import { AboutComponent } from './components/about/about.Component';
import { SignupComponent } from './components/signup/signup.Component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
      path: 'about',
      component: AboutComponent
  },
  {
    path: 'petdb',
    component: SignupComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  
];

  
@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class RoutingModule { }