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
      .get(
        `https://hn.algolia.com/api/v1/search_by_date?tags=front_page`
        //`https://hn.algolia.com/api/v1/search_by_date?query=nodejs&tags=story`
      )
      .pipe(
        // map((data: any) => {
        //   console.log('​NewsSearchService:: searchSimples -> data', data);
        //   data.json();
        // })
        map((data) => {
          console.log('Apidata', data);

          // var hits = [];

          // Object.keys(data).map(function (key, index) {
          //   // hits = hits.concat(data[key]['hits']);
          //   hits = hits.splice(data[key]['hits']);
          // });
          // //var jsAssetList = hits.toString().replace(/,/g, '|');
          // //var jsAssetList = jsList.toString().replace(/,/g, '|');

          // console.log(hits);
          return data;
        })
      );
  }
}
