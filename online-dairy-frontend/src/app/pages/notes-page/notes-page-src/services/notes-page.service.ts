import { ThisReceiver } from '@angular/compiler';
import { Injectable, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Validators as ValidatorsEditor } from 'ngx-editor';
import { NgxMasonryComponent } from 'ngx-masonry';
import { Color } from 'src/app/shared/models/color';
import { Note } from 'src/app/shared/models/note';
import { ColorService } from 'src/app/shared/services/color.service';
import { NoteService } from 'src/app/shared/services/note.service';
import { CardViewerComponent } from '../components/card-viewer/card-viewer.component';
import { CardViewerActivityStates } from '../models/card-viewer-activity-states';

@Injectable({
  providedIn: 'root',
})
export class NotesPageService {
  private _masonries!: NgxMasonryComponent[];

  private _cardEitorForm!: FormGroup;
  private _notes!: Note[];
  private _colors!: Color[];

  private _search!: string;


  public get search(): string {
    return this._search;
  }
  public set search(value: string) {
    this._search = value.trim();
  }

  public get notes(): Note[] {
    return this._notes;
  }

  public get cardEitorForm() {
    return this._cardEitorForm;
  }

  public get colors() {
    return this._colors;
  }

  public get masonryies() {
    return this._masonries;
  }


  public constructor(
    private modalService: NgbModal,
    private noteService: NoteService,
    private colorService: ColorService
  ) {
    this._masonries = new Array();
    this._notes = new Array();
    this._search = "";
    this._cardEitorForm = new FormGroup(
      {
        actionType: new FormControl<CardViewerActivityStates>(
          CardViewerActivityStates.SAVE
        ),
        id: new FormControl<number>(0),
        content: new FormControl('', [ValidatorsEditor.required()]),
        header: new FormControl(''),
        color: new FormControl<Color>(new Color()),
        created: new FormControl<Date>(new Date()),
        marked: new FormControl<boolean>(false)
      }
    );
    this.retrieveColors();
    this.retrieveNotes();
  }


  public retrieveNotes(): void {
    this.noteService.getALL().subscribe({
      next: data => {
        this._notes.push(...data);
        this.reloadMasonryLayout();
      },
    });
  }

  public retrieveColors(): void {
    this.colorService.getAll().subscribe({
      next: (data) => (this._colors = data),
    });
  }

  public updateNotes(note:Note): void {
    this.noteService.update(note).subscribe({
      next: data=>{
        let oldNote = this.findNoteById(data.id!)!;
        oldNote.color = data.color;
        oldNote.content = data.content;
        oldNote.header = data.header;
        oldNote.created = data.created;
        oldNote.marked = data.marked;
        this.reloadMasonryLayout();
    },
    error: err => {
        console.error("Can`t update note: " + err);

    }
  })
  }

  public addNote(note:Note): void {
    this.noteService.create(note).subscribe({
      next: data=>{
        this._notes.push(data);
        this.reloadMasonryLayout();
    },
    error: err => {
        console.error("Can`t add note: " + err);

    }
  })
  }

  public deleteNote(id:number):void {
    this.noteService.delete(id).subscribe({
      next: data=>{
        this._notes.splice(this.findNoteIdById(id),1);
        this.reloadMasonryLayout();
    },
    error: err => {
        console.error("Can`t delete note: " + err);

    }
  })
  }

  public markNote(id: number): void {
    this.fillNoteForm(this.findNoteById(id)!);
    this._cardEitorForm.patchValue({marked: !this._cardEitorForm.get('marked')?.value});
    this.updateNotes(this._cardEitorForm.getRawValue());
    this.reloadMasonryLayout();
  }


  openNoteCardModal(id: number|null) {
    let note!:Note;

    if (id !== null)
      note = this.findNoteById(id)!;

    this.fillNoteForm(note);
    this._cardEitorForm.patchValue({
      actionType: note?CardViewerActivityStates.EDIT:CardViewerActivityStates.SAVE,
    });

    this.modalService
      .open(CardViewerComponent)
      .result.then(
        (result) => {
          console.log(this.cardEitorForm.getRawValue());

          if(result == CardViewerActivityStates.SAVE)
            this.addNote(this.cardEitorForm.getRawValue());
          else if (result == CardViewerActivityStates.EDIT)
            this.updateNotes(this.cardEitorForm.getRawValue());
        },
        (reason) => {}
      );
  }

  private fillNoteForm(note:Note|null):void {
    this._cardEitorForm.patchValue({
      id: note?note.id:null,
      content: note?note.content:"",
      header: note?note.header:"",
      color: note?note.color: this.colors?.at(0),
      created: note?note.created:new Date(),
      marked: note?note.marked:false
    });
  }

  public get markedNotes():Note[]{
    return this._notes.filter(val=> val.marked == true);
  }

  public get unmarkedNotes():Note[]{
    return this._notes.filter(val=> val.marked == false);
  }

  private findNoteIdById(id:number):number {
    return this._notes.findIndex(val => val.id == id);
  }

  private findNoteById(id:number):Note|undefined {
    return this._notes.find(val => val.id == id);
  }

  private reloadMasonryLayout() {

    this._masonries.forEach(v => {
      if (v) {
        console.log(2);

        // v.reloadItems();
        v.layout();
      }
    })
  }

}
