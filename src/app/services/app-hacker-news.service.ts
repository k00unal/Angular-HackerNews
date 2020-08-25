import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppHackerNewsService {
  constructor(private http: HttpClient) {}

  getNews() {
    return this.http
      .get(`https://hn.algolia.com/api/v1/search_by_date?tags=front_page`)
      .pipe(
        map((data) => {
          console.log('Apidata', data);

          return data;
        })
      );
  }
}
