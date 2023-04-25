import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tag } from '../models/tag';

const baseUrl = environment.baseServerUrl + environment.apiVersion;


@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private httpClient:HttpClient) {
   }

   public getAll():Observable<Tag[]> {
    return this.httpClient.get<Tag[]>(baseUrl + "/tags");
  }
}
