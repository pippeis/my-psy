import {Component, EventEmitter, OnInit} from '@angular/core';
import {User} from '@app/models/user';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {
  user: User = new User();
  public addUser: EventEmitter<User> = new EventEmitter<User>();

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>
  ) {
  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.addUser.emit(this.user);
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
