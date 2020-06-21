import { Directive, ElementRef, Renderer2, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appGridItem]',
})
export class GridItemDirective implements OnInit {
  // HostBinding 对指令所在的宿主元素进行样式绑定
  @HostBinding('style.display') display = 'grid';
  @HostBinding('style.grid-template-areas') template = `'image' 'title'`;
  @HostBinding('style.place-items') align = 'center';
  @HostBinding('style.width') width = '4rem';
  constructor(
    private elr: ElementRef,
    private rd2: Renderer2
  ) { }

  ngOnInit(): void {
    // this.rd2.setStyle(this.elr.nativeElement, 'display', 'grid');
    // this.rd2.setStyle(this.elr.nativeElement, 'grid-template-areas', `'image' 'title'`);
    // this.rd2.setStyle(this.elr.nativeElement, 'place-items', 'center');
    // this.rd2.setStyle(this.elr.nativeElement, 'width', '4rem');
  }
}