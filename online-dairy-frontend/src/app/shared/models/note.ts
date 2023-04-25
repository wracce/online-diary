import { Color } from "./color";

export class Note {
  id?: number;

  header?: string;

  content?: string;

  created?: Date;

  marked?: boolean;

  color?: Color;
}
