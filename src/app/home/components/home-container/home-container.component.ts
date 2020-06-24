import { Component, OnInit, ViewChildren, Inject } from '@angular/core';
import { ImageSliderComponent, TopMenu } from 'src/app/shared/components';
import { Router } from '@angular/router';
import { HomeService, token } from '../../services';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  @ViewChildren('imageSlider') imageSlider: ImageSliderComponent;
  topMenus: TopMenu[] = [];

  constructor(
    private router: Router,
    private service: HomeService,
    @Inject(token) private baseUrl: string
  ) { }

  ngOnInit() {
    this.service.getTabs().subscribe(tabs => {
      this.topMenus = tabs;
    });

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
