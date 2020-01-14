import {NgModule} from '@angular/core';
import {WelcomeComponent} from './welcome/welcome.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DataService} from './dashboard/data.service';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';
import {PostDialogComponent} from './post-dialog/post-dialog.component';
import {FormsModule} from '@angular/forms';
import {UserComponent} from '@app/components/user/user.component';
import {HomeComponent} from '@app/components/home/home.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {LoginDialogComponent} from './login-dialog/login-dialog.component';
import {InvoiceComponent} from './invoice/invoice.component';
import {ErrorDialogComponent} from './error-dialog/error-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    HeaderComponent
  ],
  declarations: [
    WelcomeComponent,
    DashboardComponent,
    PostDialogComponent,
    UserComponent,
    HomeComponent,
    HeaderComponent,
    LoginDialogComponent,
    InvoiceComponent,
    ErrorDialogComponent
  ],
  providers: [
    // TODO: remove me
    DataService
  ]
})
export class ComponentsModule {
}
