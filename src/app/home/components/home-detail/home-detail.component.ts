import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ImageSlider, Channel } from 'src/app/shared/components';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit {
  selectedLabLink;
  imageSliders: ImageSlider[] = [];
  channels: Channel[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: HomeService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedLabLink = params.get('tabLink');
      this.cd.markForCheck();
    });

    this.service.getChannels().subscribe(channels => {
      this.channels = channels;
      this.cd.markForCheck();
    });
    this.service.getBanners().subscribe(banners => {
      this.imageSliders = banners;
      this.cd.markForCheck();
    });
  }

}
