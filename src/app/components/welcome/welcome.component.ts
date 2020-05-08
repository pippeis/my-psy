import {Component, OnInit} from '@angular/core';
import {TestService} from '@app/services/test.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private testService: TestService) {
  }

  ngOnInit() {
  }

  save() {
    this.testService.save({name: 'pinco pallo', address: 'via a caso 11'}).subscribe(data => console.log(data));
  }

  find() {
    this.testService.getUsers().subscribe(data => console.log(data));
  }

  delete() {
    this.testService.delete('xxx').subscribe(data => console.log(data));
  }
}
