import {Component, OnInit} from '@angular/core';
import {SpinnerService} from '@app/components/spinner-overlay-wrapper/spinner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private spinnerService: SpinnerService) {
  }

  ngOnInit() {
    this.spinnerService.show();
    const self = this;
    setTimeout(() => {
      self.spinnerService.hide();
    }, 5000);
  }
}
