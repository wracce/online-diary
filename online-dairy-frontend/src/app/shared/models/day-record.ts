import { DaySchedule } from "./day-schedule";
import { Tag } from "./tag";

export class DayRecord {
  id?:number;

  text?:string;

  done?:boolean;

  tag?: Tag;

}
