import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Editor } from 'ngx-editor';
import { NgForm} from '@angular/forms';
import { NotesPageService } from '../../services/notes-page.service';
import { timestamp } from 'rxjs';
import { CardViewerComponent } from '../card-viewer/card-viewer.component';
import { Color } from 'src/app/shared/models/color';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  @Input()
  public marked?:boolean;

  @Input()
  public header?:String;

  @Input()
  public created?:Date;

  @Input()
  public color?:Color;

  @Input()
  public id!:number;


  ngOnInit(): void {
  }

  constructor(public notesPageService:NotesPageService) {}

}
