import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '@app/models/user';
import {Observable} from 'rxjs';
import {environment} from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/users`, {
      observe: 'body'
    });
  }

  addUser(user: User): Observable<User> {
    return this.http.put<User>(`${environment.apiUrl}/users`, user, {
      observe: 'body'
    });
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/users/${id}`, {
      observe: 'body'
    });
  }
}
