import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-psy';

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  login(): void {
    const username = 'admin';
    const password = 'admin';
    this.authService.login(username, password).subscribe();
  }

  logout(): void {
    this.authService.logout();
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
}
