import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, take } from 'rxjs';
import { DayRecord } from 'src/app/shared/models/day-record';
import { DaySchedule } from 'src/app/shared/models/day-schedule';
import { Tag } from 'src/app/shared/models/tag';
import { DayRecordService } from 'src/app/shared/services/day-record.service';
import { DayScheduleService } from 'src/app/shared/services/day-schedule.service';
import { TagService } from 'src/app/shared/services/tag.service';

@Injectable({
  providedIn: 'root',
})
export class DiaryPageService {
  private _tagsLoaded = new  Subject<any>();
  private _daysLoaded = new  Subject<any>();
  private _tags: Tag[] = [];
  private _days: DaySchedule[] = [];
  private _currentDay: DaySchedule = new DaySchedule();

  public get tags(): Tag[] {
    return this._tags;
  }

  public get days(): DaySchedule[] {
    return this._days;
  }

  public get currentDay(): DaySchedule {
    return this._currentDay;
  }

  public get tagsLoaded(): Observable<any> {
    return this._tagsLoaded;
  }

  public get daysLoaded(): Observable<any> {
    return this._daysLoaded;
  }


  constructor(
    private tagService: TagService,
    private dayScheduleService: DayScheduleService,
    private dayRecordService: DayRecordService
  ) {
    this._currentDay = new DaySchedule();
    this._currentDay.date = new Date();
    this._tags = [];

    this.retrieveTags();
    this.retrieveDays();
  }

  public retrieveTags(): void {
    this.tagService.getAll().subscribe({
      next: (data) => {
        this._tags = data;
        this._tagsLoaded.next(1);
      },
    });
  }

  public retrieveDays(): void {
    this.dayScheduleService.getAll().subscribe({
      next: (data) => {
        this._days = data;
        this._daysLoaded.next(1);
        this.toCurrentDay();
      },
    });
  }

  public delete(day: DaySchedule, id:number): void {
    if(id>=0)
    this.dayRecordService.delete(id).subscribe({
      next: (data) => {
        day.dayRecords = day.dayRecords?.filter(r => r.id !== id);

      },
    });
  }

  public createRecord(day: DaySchedule, dayRecord: DayRecord): void {
    this.dayScheduleService.createDayRecord(dayRecord, day).subscribe({
      next: (data) => {
        day.dayRecords = [...day.dayRecords!, data];
      },
    });
  }

  public updateRecord(
    dayRecord: DayRecord,
    day: DaySchedule
  ): Observable<DayRecord> {
    let sub = new Subject<DayRecord>();
    this.dayRecordService.update(dayRecord).subscribe({
      next: (data) => {
        let rec = day.dayRecords?.find((r) => r.id == data.id);
        if (rec) {
          rec.done = data.done;
          rec.tag = data.tag;
          rec.text = data.text;
          rec.id = data.id;
        }
        sub.next(rec!);
      },
    });
    return sub.asObservable();
  }

  getTagByName(name: string): Tag | undefined {
    return this.tags.find((t) => t.name === name);
  }

  getIdByDayRecordId(id: number): number | undefined {
    return this.tags.findIndex((rec) => rec.id === id);
  }

  toCurrentDay(): void {

      this._currentDay = this.getDayScheduleByDate(new Date());
  }

  toNextDay(): void {
    let date = new Date(this.currentDay.date!);
    date.setDate(date.getDate() + 1);
    this._currentDay = this.getDayScheduleByDate(date);
  }

  toLastDay(): void {
    let date = new Date(this.currentDay.date!);
    date.setDate(date.getDate() - 1);
    this._currentDay = this.getDayScheduleByDate(date);
  }

  getDayScheduleByDate(date: Date): DaySchedule {
    let today = new Date();
    console.log(today.getDate());
    console.log(new Date(this.days[0].date!).getDate());
    console.log(today.getFullYear());
    console.log(new Date(this.days[0].date!).getFullYear());
    console.log(today.getMonth());
    console.log(new Date(this.days[0].date!).getMonth());
    let localDate = new Date(date);
    console.log(localDate.toDateString());

    let day = this.days.find(
      (d) => this.isEquelsDate(d.date!,date)
    );
    if (!day) {
      console.log('today');
      day = new DaySchedule();
      day.dayRecords = [];
      day.note = '';
      day.id = -1;
      day.date = date;
      this._days.push(day);
    }
    return day;
  }
  isEquelsDate(date1: Date, date2: Date): boolean {
    date1 = new Date(date1);
    date2 = new Date(date2);
    return (
      date1.getDate() === date2.getDate() &&
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth()
    );
  }
}
