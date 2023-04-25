import { Pipe, PipeTransform } from '@angular/core';
import { concat } from 'rxjs';
import { Note } from 'src/app/shared/models/note';

@Pipe({
  name: 'filterNotes'
})
export class FilterNotesPipe implements PipeTransform {

  transform(notes: Note[], search:string): Note[] {
    search = search.trim().toLowerCase();

    if (search.trim() === "") {
      return notes;
    }

    return notes.filter(v => this.foundSearch(v,search));
  }

  private foundSearch(note: Note, search: string):boolean {
    return "".concat(note.content?note.content.toLowerCase():""," | ",note.header?note.header.toLowerCase():"").includes(search);
  }

}
