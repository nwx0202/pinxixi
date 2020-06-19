import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Emoji } from '../../decorators';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {
  private _username = '';
  @Output() usernameChange = new EventEmitter();
  @Emoji() result = 'Hello';

  constructor() { }

  ngOnInit() {
    console.log(this.result);
  }

  @Input()
  public get username(): string {
    return this._username;
  }

  public set username(value: string) {
    this._username = value;
    this.usernameChange.emit(value);
  }

}
