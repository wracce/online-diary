import { Pipe, PipeTransform } from '@angular/core';
import { DayRecord } from 'src/app/shared/models/day-record';
import { Tag } from 'src/app/shared/models/tag';

const MIN_RECS: number = 5;

@Pipe({
  name: 'preRecords',
})
export class PreRecordsPipe implements PipeTransform {
  transform(recs?: DayRecord[], day?: DayRecord): DayRecord[] {
    let res: DayRecord[] = recs ? [...recs] : [];
    if (recs)
      for (let i = res.length; i < MIN_RECS || (i <= recs.length); i++) res.push(new DayRecord());
    return res;
  }
}
