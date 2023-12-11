import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http
      .get<{ users: Array<{ name: string }> }>('/api/users')
      .pipe(map((res) => res.users));
  }
}
