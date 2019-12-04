import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  authenticated = false;
  accessToken: string;
  expiresAt: number;

  constructor(private router: Router) {
  }

  login(): void {
    this.accessToken = '0123456789';
    this.expiresAt = (1000 * 60 * 60) + new Date().getTime();
  }

  handleAuthentication(): void {
    this.authenticated = true;
  }

  logout(): void {
    this.accessToken = null;
    this.expiresAt = null;
    this.authenticated = false;
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    return new Date().getTime() < this.expiresAt && this.authenticated;
  }
}
