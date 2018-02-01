import { Component } from '@angular/core';
import { AuthService } from './../services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'site-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent {
  constructor(private auth:AuthService) {
    auth.handleAuthentication();
  }
}
