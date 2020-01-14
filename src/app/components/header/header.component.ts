import {Component, OnInit} from '@angular/core';
import {AuthService} from '@app/services/auth.service';
import {MatDialog} from '@angular/material';
import {LoginDialogComponent} from '@app/components/login-dialog/login-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openDialog(): void {
    this.dialog.open(LoginDialogComponent, {
      width: '600px'
    });
  }

  logout(): void {
    this.authService.logout();
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
}
