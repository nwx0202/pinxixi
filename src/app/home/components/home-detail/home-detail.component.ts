import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ImageSlider, Channel } from 'src/app/shared/components';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';
import { filter, map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit, OnDestroy {
  selectedLabLink$: Observable<string>;
  imageSliders$: Observable<ImageSlider[]>;
  channels$: Observable<Channel[]>;
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private service: HomeService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.selectedLabLink$ = this.route.paramMap
    .pipe(
      filter(params => params.has('tabLink')),
      map(params => params.get('tabLink'))
    );

    this.sub = this.route.queryParamMap.subscribe(params => {
      console.log('查询参数: ', params);
    });

    this.channels$ = this.service.getChannels()
    this.imageSliders$ = this.service.getBanners();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
