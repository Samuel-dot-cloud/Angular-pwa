import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  // tslint:disable-next-line:variable-name
  api_key = '65312ce7ab4144bc8c4c3552ca81d04e';

  constructor(private http: HttpClient) { }

  getArticlesTechnology(): Observable<any> {
    return this.http
      .get(
        'https://newsapi.org/v2/top-headlines?category=technology&language=en&country=us&apiKey=' +
          this.api_key
      )
      .pipe(map((data: any) => data.articles));
  }

  getArticlesJavaScript(): Observable<any> {
    return this.http
      .get(
        'https://newsapi.org/v2/everything?q=javascript&sortBy=latest&apiKey=' +
          this.api_key
      )
      .pipe(map((data: any) => data.articles));
  }
}
