import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {AuthService} from '@app/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-dialog-component',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  username: string;
  password: string;
  dummyPassword = '';

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe(() => {
      this.dialogRef.close();
      this.router.navigate(['auth/home']);
    });
  }

  setDummyPassword(): void {
    if (this.password && this.password.length > 0) {
      let i = 0;
      while (i < this.password.length) {
        this.dummyPassword += '*';
        i++;
      }
    }
  }
}
