import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  private myModal:HTMLElement;
  private myInput:HTMLElement;

  constructor() {
    this.myModal = document.getElementById('modal1')!;
    this.myInput = document.getElementById('myInput')!;
  }
  ngOnInit(): void {
    this.myModal = document.getElementById('modal1')!;
    this.myInput = document.getElementById('myInput')!;
  }


  public openModal():void {
    console.log(this.myModal);

    this.myModal.addEventListener('shown.bs.modal', () => {
      // this.myInput.focus()
    })
  }
}
