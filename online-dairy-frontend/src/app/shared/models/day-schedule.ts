import { DayRecord } from "./day-record";

export class DaySchedule {
   id?:number;

   date?:Date;

   note?:string;

  dayRecords?: DayRecord[];
}
