import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PetBioComponent } from './components/pet-bio/pet-bio.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ProfileComponent,
    PetBioComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    Angular2FontawesomeModule
  ],
  providers: [
    AUTH_PROVIDERS,
    AuthService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
