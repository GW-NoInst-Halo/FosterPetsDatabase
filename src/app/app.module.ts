import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { PetBioComponent } from './components/pet-bio/pet-bio.component';


@NgModule({
  declarations: [
    AppComponent,
    PetBioComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
