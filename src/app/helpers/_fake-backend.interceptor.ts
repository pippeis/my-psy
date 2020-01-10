import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {User} from '@app/models/user';
import {delay, dematerialize, materialize, mergeMap} from 'rxjs/operators';

const USERS: User[] = [
  {id: 1, username: 'admin', password: 'admin', firstName: 'Admin', lastName: 'UserAdmin'},
  {id: 2, username: 'test1', password: 'test', firstName: 'Test1', lastName: 'User1'},
  {id: 3, username: 'test2', password: 'test', firstName: 'Test2', lastName: 'User2'},
  {id: 4, username: 'test3', password: 'test', firstName: 'Test3', lastName: 'User3'}
];

const TOKEN = 'fake-jwt-token';

@Injectable({
  providedIn: 'root'
})
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case req.url.endsWith('/users/authenticate') && req.method === 'POST':
          return authenticate();
        case req.url.endsWith('/users') && req.method === 'GET':
          return getUsers();
        case req.url.endsWith('/users') && req.method === 'PUT':
          return addUser(req.body.user);
        case req.url.endsWith('/users/*') && req.method === 'DELETE':
          return deleteUser(req.body.user.id);
        default:
          // pass through any requests not handled above
          return next.handle(req);
      }
    }

    function authenticate() {
      const user = USERS.find(x => x.username === req.body.username && x.password === req.body.password);
      if (!user) {
        return error('Username or password are incorrect');
      }
      return ok({
        id: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        token: TOKEN
      });
    }

    function getUsers() {
      if (!isLoggedIn()) {
        return unauthorized();
      }
      return ok(USERS);
    }

    function addUser(user: User) {
      return ok(USERS.push(user));
    }

    function deleteUser(id: number) {
      const user = USERS.find(value => value.id === id);
      return ok(USERS.slice(USERS.indexOf(user, 0), 1));
    }

    function ok(body?): Observable<HttpResponse<any>> {
      return of(new HttpResponse({status: 200, body}));
    }

    function error(message): Observable<never> {
      return throwError({error: {message}});
    }

    function unauthorized(): Observable<never> {
      return throwError({status: 401, error: {message: 'Unauthorised'}});
    }

    function isLoggedIn(): boolean {
      return req.headers.get('Authorization') === 'Bearer ' + TOKEN;
    }
  }
}