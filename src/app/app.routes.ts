import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PetBioComponent } from './components/pet-bio/pet-bio.component'

import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
      path: '',
      component: PetBioComponent
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
