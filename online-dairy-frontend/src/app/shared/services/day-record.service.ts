import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DayRecord } from '../models/day-record';

const baseUrl = environment.baseServerUrl + environment.apiVersion + "/day-records";


@Injectable({
  providedIn: 'root'
})
export class DayRecordService {
  constructor(private httpClient:HttpClient) {}

  public update(rec: DayRecord):Observable<DayRecord>  {
    return this.httpClient.put<DayRecord>(baseUrl,rec);
  }

  public delete(id: number):Observable<any>  {
    return this.httpClient.delete(baseUrl+ "/" + id);
  }
}
