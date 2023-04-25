import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DaySchedule } from 'src/app/shared/models/day-schedule';
import { DiaryPageService } from '../../services/diary-page.service';

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.scss'],
})
export class DayCardComponent implements OnInit {
  @Input()
  day!:DaySchedule;

  @Input()

  form = new FormGroup({
    note: new FormControl<string>(''),
  });

  constructor(public diaryPageService: DiaryPageService) {}
  ngOnInit(): void {
    this.form.controls.note.setValue(this.day.note!);


    this.diaryPageService.daysLoaded.subscribe(() => {
      this.day = this.diaryPageService.getDayScheduleByDate(this.day.date!)
      console.log(this.day);

      this.form.controls.note.setValue(this.day.note!);
    });
    console.log(this.form.value.note);

  }

  isDisabled(i: number): boolean {
    console.log(i);
    console.log(this.day.dayRecords?.length);

    return true;
  }
}
