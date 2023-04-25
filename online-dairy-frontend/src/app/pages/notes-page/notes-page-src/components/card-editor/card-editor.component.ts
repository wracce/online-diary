import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Editor, Toolbar  } from 'ngx-editor';
import { NotesPageService } from '../../services/notes-page.service';

@Component({
  selector: 'app-card-editor',
  templateUrl: './card-editor.component.html',
  styleUrls: ['./card-editor.component.scss']
})
export class CardEditorComponent {

  editor!:Editor;

  toolbar: Toolbar = [
    ['bold', 'italic', 'underline', 'strike'],
    ['link', 'blockquote', 'image'],
    ['ordered_list', 'bullet_list'],
    ['text_color', 'background_color'],
  ];

  contentForm!:FormGroup;

  constructor(public notesPageService:NotesPageService) {
    this.contentForm = notesPageService.cardEitorForm;
  }

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }


}
