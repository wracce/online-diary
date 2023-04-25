import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DayRecord } from '../models/day-record';
import { DaySchedule } from '../models/day-schedule';

const baseUrl = environment.baseServerUrl + environment.apiVersion + "/day-schedules";


@Injectable({
  providedIn: 'root'
})
export class DayScheduleService {

  constructor(private httpClient:HttpClient) {}

  public getAll():Observable<DaySchedule[]> {
    return this.httpClient.get<DaySchedule[]>(baseUrl).pipe(map(l=>{
      l.forEach(d=>{
        let now = new Date();
        let date = new Date(d.date!);
        now.setUTCDate(date.getDate());
        now.setUTCMonth(date.getMonth());
        now.setUTCFullYear(date.getFullYear());
        d.date = now;
      })
      return l;
    }));
  }

  // public getByDate(date:Date):Observable<DaySchedule>  {
  //   return this.httpClient.get<DaySchedule>(baseUrl + "/" + date);
  // }

  public delete(id: number):Observable<any>  {
    return this.httpClient.delete(baseUrl+ "/" + id);
  }

  public createDayRecord(rec: DayRecord, day: DaySchedule):Observable<DayRecord> {
    let date = new Date(day.date!).toISOString().split("T")[0];
    // let date = new Date(day.date!).toISOString()


    return this.httpClient.post<DayRecord>(baseUrl + "/" + date,rec);
  }
}
