import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from '@app/components/welcome/welcome.component';
import {DashboardComponent} from '@app/components/dashboard/dashboard.component';
import {UserComponent} from '@app/components/user/user.component';
import {AuthGuard} from '@app/helpers/auth.guard';
import {HomeComponent} from '@app/components/home/home.component';
import {InvoiceComponent} from '@app/components/invoice/invoice.component';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {
    path: 'auth', canActivate: [AuthGuard], children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'users', component: UserComponent},
      {path: 'invoices', component: InvoiceComponent},
      {path: 'dashboard', component: DashboardComponent}
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
