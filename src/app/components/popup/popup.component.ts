import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Output('closeDialog') closeDialog: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.closeDialog.emit(null);
  }

}
