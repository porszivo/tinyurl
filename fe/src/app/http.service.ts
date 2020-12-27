import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tinyurl } from './tinyurl';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {
  }

  get(id: String): Observable<Tinyurl> {
    return this.httpClient.get<Tinyurl>(`http://localhost:3000/url/${id}`);
  }

  sendUrl(url: string) {
    return this.httpClient.post<HttpResponse<string>>("http://localhost:3000/url", {url: url}, {observe: 'response'})
      .pipe(map(
        (response) => {
          return response;
        }));
  }

}
