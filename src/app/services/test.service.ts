import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<TestUser[]> {
    return this.http.get<TestUser[]>(`${environment.apiUrl}/user/find`, {
      observe: 'body'
    });
  }

  save(user: TestUser): Observable<void> {
    return this.http.post<void>(`${environment.apiUrl}/user/save`, user, {
      observe: 'body'
    });
  }

  delete(id: string): Observable<void> {
    return this.http.post<void>(`${environment.apiUrl}/user/save`, {id}, {
      observe: 'body'
    });
  }
}

export class TestUser {
  constructor(public name: string, public address: string) {
  }
}
