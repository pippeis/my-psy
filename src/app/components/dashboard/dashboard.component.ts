import {Component, OnInit} from '@angular/core';
import {DataService} from './data.service';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';
import {Post} from './post.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns = ['date_posted', 'title', 'category', 'delete'];
  dataSource = new PostDataSource(this.dataService);

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }

}

export class PostDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }

  connect(): Observable<Post[]> {
    return this.dataService.getData();
  }

  disconnect() {
  }
}
