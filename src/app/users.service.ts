import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private http: HttpClient) { }

  onServiceCall() {
    return this.http.get("https://api.github.com/users")
  }

  getRepository(repoURL) {
    return this.http.get(repoURL);
  }
}
