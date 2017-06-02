import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent {
  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }
  title = 'app works!';

  login(): void {
    this.auth.login();
  }
}
