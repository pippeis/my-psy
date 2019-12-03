import {NgModule} from '@angular/core';
import {WelcomeComponent} from './welcome/welcome.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DataService} from './dashboard/data.service';
import {MatCardModule, MatIconModule, MatListModule, MatSidenavModule, MatTableModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    CommonModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    CommonModule
  ],
  declarations: [
    WelcomeComponent,
    DashboardComponent
  ],
  providers: [
    DataService
  ]
})
export class ComponentsModule {
}
