import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild('inputRef', {static: true}) inputRef: ElementRef;

  constructor() { }

  ngOnInit() {
    fromEvent(this.inputRef.nativeElement, 'input').subscribe((ev: any) => {
      console.log(ev.target);
    });
  }

}
