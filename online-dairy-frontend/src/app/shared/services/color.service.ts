import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Color } from '../models/color';

const baseUrl = environment.baseServerUrl + environment.apiVersion;

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient:HttpClient) { }

  public getAll():Observable<Color[]> {
    return this.httpClient.get<Color[]>(baseUrl + "/colors");
  }
}
