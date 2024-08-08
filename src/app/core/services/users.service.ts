import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../interfaces/users';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  private API_BASE_URL = environment.API_BASE_URL + '/users';

  getUsers(page: number): Observable<Users> {
    return this.http.get<Users>(this.API_BASE_URL + `?page=${page}`);
  }

  getUserById(id: number): Observable<User> {
    return this.http
      .get<{ data: User }>(this.API_BASE_URL + `/${id}`)
      .pipe(map((response) => response.data));
  }
}
