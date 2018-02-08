import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'site-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
  constructor(private auth:AuthService) {
    auth.handleAuthentication();
  }

  ngOnInit() {
  }
  
}
