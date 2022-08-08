import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Cat, CatSearchParams, SelectOption } from '../store/models/cats';

@Injectable({ providedIn: 'root' })
export class CatService {

  constructor(private http: HttpClient) {}

  BASE_URL = "https://api.thecatapi.com/v1";
  apiKey = 'e91027f4-845d-49c5-9f4b-478e86d0081e';

  getCats(searchParams: CatSearchParams): Observable<Cat[]> {
    return this.http.get<Cat[]>(`${this.BASE_URL}/images/search`, {
      params: new HttpParams({
        fromObject: { ...searchParams }
      }),
      headers: new HttpHeaders({'x-api-key': this.apiKey})
    })
  }

  getBreedsOptions(): Observable<SelectOption[]> {
    return this.http.get<SelectOption[]>(`${this.BASE_URL}/breeds`, {
      headers: new HttpHeaders({'x-api-key': this.apiKey})
    })
  }

}
