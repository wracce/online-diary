import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ROUTER_INITIALIZER } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Editor, NgxEditorComponent } from 'ngx-editor';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import { NotesPageService } from './notes-page-src/services/notes-page.service';

@Component({
  selector: 'app-notes-page',
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.scss']
})
export class NotesPageComponent implements AfterViewInit {
  @ViewChild(NgxMasonryComponent)
  masonry1!: NgxMasonryComponent;

  @ViewChild(NgxMasonryComponent)
  masonry2!: NgxMasonryComponent;

  constructor(public notesPageService:NotesPageService) {}

  public masonryOptions: NgxMasonryOptions = {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter:10,
    percentPosition: true
  };

  public ngAfterViewInit(): void {
    this.notesPageService.masonryies.push(this.masonry1);
    this.notesPageService.masonryies.push(this.masonry2);
  }
}
