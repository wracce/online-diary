import { AfterViewInit, Component } from '@angular/core';
import { DiaryPageService } from './diary-page-src/services/diary-page.service';

@Component({
  selector: 'app-diary-page',
  templateUrl: './diary-page.component.html',
  styleUrls: ['./diary-page.component.scss']
})
export class DiaryPageComponent implements AfterViewInit{


  constructor(public diaryPageService:DiaryPageService) {}
  ngAfterViewInit(): void {
    // this.form.valueChanges.subscribe((value) => {
    //   this.content.nativeElement.style.height = `${this.content.nativeElement.scrollHeight}px`;
    // });
  }


  toCurrentDay(): void {
    if (!this.diaryPageService.isEquelsDate(this.diaryPageService.currentDay.date!,new Date()))
      this.diaryPageService.toCurrentDay();
  }

}
