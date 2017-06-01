// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import auth0 from 'auth0-js';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'Z89fJ1NUucx3hZQDW5MFx8qnIDgxeE1-',
    domain: 'craigles.au.auth0.com',
    responseType: 'token id_token',
    audience: 'https://craigles.au.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/callback',      
    scope: 'openid'
  });

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }

}