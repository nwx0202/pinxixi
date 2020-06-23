import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

export interface TopMenu {
  id: number;
  title: string;
  link: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollableTabComponent implements OnInit {
  selectedIndex = -1;

  @Input() menus: TopMenu[] = [];
  @Input() backgroundColor = '#fff';
  @Input() titleActiveColor = 'yellow';
  @Input() titleColor = 'blue';
  @Input() indicatorColor = 'brown';
  @Output() tabSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleSelection(index: number) {
    this.selectedIndex = index;
    const emitData = this.menus[this.selectedIndex];
    this.tabSelected.emit(emitData);
  }

}
