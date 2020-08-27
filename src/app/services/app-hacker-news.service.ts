import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppHackerNewsService {
  private NEW_API =
    'https://hn.algolia.com/api/v1/search?query=front_page&hitsPerPage=10&page=';

  constructor(private http: HttpClient) {}

  public getNews(page): Observable<any> {
    return this.http.get(this.NEW_API + page);
  }
}
