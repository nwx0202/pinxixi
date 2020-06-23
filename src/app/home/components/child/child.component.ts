import { Component, OnInit, NgZone, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  _title: string;
  _time;
  @ViewChild('timeRef', {static: true}) timeRef: ElementRef;
  public get title(): string {
    console.log('脏值检测');
    return this._title;
  }

  public get time(): number {
    return this._time;
  }

  constructor(
    private ngZong: NgZone,
    private rd: Renderer2
  ) {
    this._title = 'hi';
  }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    this.ngZong.runOutsideAngular(() => {
      setInterval(() => {
        this._title = '你好';
        this._time = Date.now();
        // this.timeRef.nativeElement.innerText = Date.now(); 
        this.rd.setProperty(
          this.timeRef.nativeElement,
          'innerText',
          formatDate(Date.now(), 'yyyy/MM/dd HH:mm:ss:SSS', 'zh-Hans')
        );
      }, 100);
    });
  }

  handleClick(ev) {

  }

}
