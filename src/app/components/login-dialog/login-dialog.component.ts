import {Component, EventEmitter, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {AuthService} from '@app/services/auth.service';

@Component({
  selector: 'app-login-dialog-component',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  public event: EventEmitter<any> = new EventEmitter();
  username: string;
  password: string;

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe(() => this.dialogRef.close(), error => alert(error));
  }
}
