import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren, QueryList, Renderer2 } from '@angular/core';

export interface ImageSlider {
  id: number;
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  @Input() sliders: ImageSlider[] = [];
  @ViewChild('imageSlider', {static: true}) imageSlider: ElementRef;
  @ViewChildren('img') imgs: QueryList<ElementRef>;

  constructor(
    private rd2: Renderer2
  ) { }

  ngOnInit() {
    console.log('imageSlider', this.imageSlider);
  }

  ngAfterViewInit(): void {
    console.log('imgs', this.imgs);
    // this.imgs.forEach(img => {
    //   img.nativeElement.style.height = '100px';
    // });
    this.imgs.forEach(item => {
      this.rd2.setStyle(item.nativeElement, 'height', '100px');
    });
  }

}
