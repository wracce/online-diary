import { RecursiveAstVisitor } from '@angular/compiler';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { retry } from 'rxjs';
import { DayRecord } from 'src/app/shared/models/day-record';
import { DaySchedule } from 'src/app/shared/models/day-schedule';
import { Tag } from 'src/app/shared/models/tag';
import { DiaryPageService } from '../../services/diary-page.service';

@Component({
  selector: 'app-day-record',
  templateUrl: './day-record.component.html',
  styleUrls: ['./day-record.component.scss'],
})
export class DayRecordComponent implements OnInit, AfterViewInit {
  @ViewChild('content') content!: ElementRef;
  form: FormGroup = this.fb.group({
    id: [-1],
    tag: [''],
    content: [''],
    done: [false],
  });

  @Input()
  idRow = 0;
  @Input()
  dayRecord!: DayRecord;
  @Input()
  day = new DaySchedule();
  @Input()
  disabled = false;

  public get done(): boolean {
    return this.form.get('done')?.value;
  }

  public set done(done: boolean) {
    this.form.get('done')?.setValue(done)!;
  }

  constructor(
    private fb: FormBuilder,
    public diaryPageService: DiaryPageService
  ) {}

  ngAfterViewInit(): void {
    this.form.valueChanges.subscribe((value) => {
      let delata = this.content.nativeElement.offsetHeight - this.content.nativeElement.clientHeight
      console.log(delata);

      this.content.nativeElement.style.height = `${this.content.nativeElement.scrollHeight - delata}px`;
    });
    // this.form.get('done')?.valueChanges.subscribe({ next: () => this.update() });
    // this.form.get('tag')?.valueChanges.subscribe({ next: () => this.update()  });
  }

  ngOnInit(): void {
    console.log(this.dayRecord);
    this.form.patchValue({
      id: this.dayRecord.id,
      tag: this.dayRecord.tag?.name || this.diaryPageService.tags[0].name,
      content: this.dayRecord.text,
      done: this.dayRecord.done || false,
    });
  }

  triggerFunction(event: KeyboardEvent) {
    if (event.key === 'Backspace' && !this.form.value.content) {
      this.delete();
      console.log(event.key);
    }

    if ((event.key === 'Enter' && event.shiftKey) || event.key === 'Enter') {
      event.preventDefault();
      this.applyChange();
    }
  }

  applyChange(): void {
    console.log('');

    console.log(this.form.value);

    if (this.isEdit()) {
      if (this.form.value.content.trim()) {
        if (this.form.value.id >= 0) {
          this.update();
        } else {
          this.create();
        }
      } else {
        this.delete();
      }
    }
  }

  create(): void {
    console.log('create');

    this.diaryPageService.createRecord(this.day, this.toRecord());
  }

  update(): void {
    console.log('update');

    this.diaryPageService
      .updateRecord(this.toRecord(), this.day)
      .subscribe((rec) => {
        console.log(rec);
        this.form.patchValue({
          tag: rec.tag?.name,
          content: rec.text,
          done: rec.done,
        });
      });
  }

  delete(): void {
    console.log('delete');
    this.diaryPageService.delete(this.day, this.form.value.id);
  }

  isEdit(): boolean {
    let res = false;
    if (this.dayRecord.id !== undefined) {
      if (
        this.dayRecord.done != this.form.value.done ||
        this.dayRecord.tag?.name != this.form.value.tag ||
        this.dayRecord.text != this.form.value.content
      ) {
        res = true;
      }
    } else {
      if (this.form.value.content) res = true;
    }
    return res;
  }

  toRecord(): DayRecord {
    let rec: DayRecord = new DayRecord();

    rec.text = this.form.value.content;
    rec.done = this.form.value.done;
    rec.id = this.form.value.id;
    rec.tag = this.diaryPageService.getTagByName(this.form.get('tag')?.value);
    console.log(rec);

    return rec;
  }
}
