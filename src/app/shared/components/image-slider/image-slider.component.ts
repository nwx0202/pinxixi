import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren, QueryList, Renderer2, OnDestroy, AfterContentInit, AfterViewInit } from '@angular/core';

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
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '160px';
  @Input() intervalBySecond = 2;
  @ViewChild('imageSlider', {static: true}) imageSlider: ElementRef;
  selectedIndex = 0;
  intervalId;

  constructor(
    private rd2: Renderer2
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.intervalId = setInterval(() => {
      this.rd2.setProperty(
        this.imageSlider.nativeElement,
        'scrollLeft',
        (this.getIndex(++this.selectedIndex) * this.imageSlider.nativeElement.scrollWidth) / this.sliders.length
      );
    }, this.intervalBySecond * 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  getIndex(idx: number): number {
    return idx >= 0
      ? idx % this.sliders.length
      : this.sliders.length - (Math.abs(idx) % this.sliders.length);
  }

  handleScroll(event) {
    const ratio =
      (event.target.scrollLeft * this.sliders.length) / event.target.scrollWidth;
    this.selectedIndex = Math.round(ratio);
  }

}
