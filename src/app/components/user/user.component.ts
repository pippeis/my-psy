import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import {User} from '@app/models/user';
import {UserService} from '@app/services/user.service';
import {MatDialog} from '@angular/material';
import {UserDialogComponent} from '@app/components/user-dialog/user-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  displayedColumns = ['username', 'first-name', 'last-name', 'delete'];
  dataSource = new UserDataSource(this.userService);

  constructor(private userService: UserService, private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '600px'
    });
    dialogRef.componentInstance.addUser.subscribe((result) => {
      this.userService.addUser(result).subscribe(() => this.dataSource = new UserDataSource(this.userService));
    });
  }

  deleteUser(id) {
    this.userService.deleteUser(id).subscribe(() => this.dataSource = new UserDataSource(this.userService));
  }
}

export class UserDataSource extends DataSource<User> {
  constructor(private userService: UserService) {
    super();
  }

  connect(): Observable<User[]> {
    return this.userService.getUsers();
  }

  disconnect() {
  }
}
