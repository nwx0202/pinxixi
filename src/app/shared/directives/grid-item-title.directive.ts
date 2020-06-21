import { Directive, ElementRef, Renderer2, Input, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appGridItemTitle]',
})
export class GridItemTitleDirective implements OnInit {
  @HostBinding('style.grid-area') area = 'title';
  constructor(
    private elr: ElementRef,
    private rd2: Renderer2
  ) { }

  ngOnInit(): void {
    // this.rd2.setStyle(this.elr.nativeElement, 'grid-area', 'title');
  }
}