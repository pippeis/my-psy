import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from '@app/components/welcome/welcome.component';
import {DashboardComponent} from '@app/components/dashboard/dashboard.component';
import {UserComponent} from '@app/components/user/user.component';
import {AuthGuard} from '@app/helpers/auth.guard';
import {HomeComponent} from '@app/components/home/home.component';
import {PageNotFoundComponent} from '@app/components/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '', component: WelcomeComponent, children: [
      {
        path: 'auth', children: [
          {path: '', redirectTo: 'auth/home', pathMatch: 'full'},
          {path: 'home', component: HomeComponent},
          {path: 'users', component: UserComponent},
          {path: 'dashboard', component: DashboardComponent}
        ], canActivate: [AuthGuard]
      }
    ]
  },
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
