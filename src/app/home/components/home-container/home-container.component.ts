import { Component, OnInit, ViewChildren, Inject, ChangeDetectionStrategy } from '@angular/core';
import { ImageSliderComponent, TopMenu } from 'src/app/shared/components';
import { Router } from '@angular/router';
import { HomeService, token } from '../../services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContainerComponent implements OnInit {
  @ViewChildren('imageSlider') imageSlider: ImageSliderComponent;
  topMenus$: Observable<TopMenu[]>;

  constructor(
    private router: Router,
    private service: HomeService,
    @Inject(token) private baseUrl: string
  ) { }

  ngOnInit() {
    this.topMenus$ = this.service.getTabs();

    console.log(this.baseUrl);
  }

  handleTabSelected(topMenu: TopMenu) {
    // console.log(topMenu);
    this.router.navigate(['home', topMenu.link]);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // console.log(this.imageSlider);
  }

}
