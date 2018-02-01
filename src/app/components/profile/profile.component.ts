import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {
  
  constructor(private auth:AuthService) {
    auth.handleAuthentication();
  }

  ngOnInit() {
  }
}
