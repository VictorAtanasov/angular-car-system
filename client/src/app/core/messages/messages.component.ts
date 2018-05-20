import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  private _title;

  @Input()
  set message(val) {
    this._title = val;
  }

  get message() {
    return this._title;
  }

}
