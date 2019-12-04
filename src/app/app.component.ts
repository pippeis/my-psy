import {Component} from '@angular/core';
import {AuthService} from './components/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-psy';

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }
}
