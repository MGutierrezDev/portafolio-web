import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private readonly url = 'https://api.github.com/users/manueelguty/repos';

  constructor( private http: HttpClient) { }

  loadRepos = () => this.http.get(`${this.url}`)
}
