import { Component, OnInit, Inject } from '@angular/core';
import { ImageSlider, Channel } from 'src/app/shared/components';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  selectedLabLink;
  imageSliders: ImageSlider[] = [];
  channels: Channel[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: HomeService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedLabLink = params.get('tabLink');
    });

    this.channels = this.service.getChannels();
    this.imageSliders = this.service.getBanners();
  }

}
