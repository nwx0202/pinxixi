import { Component, OnInit, ViewChildren } from '@angular/core';
import { ImageSliderComponent, TopMenu } from 'src/app/shared/components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  @ViewChildren('imageSlider') imageSlider: ImageSliderComponent;

  topMenus: TopMenu[] = [
    {
      'id': 1,
      'title': '热门',
      'link': 'hot'
    },
    {
      'id': 2,
      'title': '男装',
      'link': 'men'
    },
    {
      'id': 3,
      'title': '百货',
      'link': 'department'
    },
    {
      'id': 4,
      'title': '运动',
      'link': 'sports'
    },
    {
      'id': 5,
      'title': '手机',
      'link': 'mobile'
    },
    {
      'id': 6,
      'title': '家纺',
      'link': 'textile'
    },
    {
      'id': 7,
      'title': '食品',
      'link': 'food'
    },
    {
      'id': 8,
      'title': '电器',
      'link': 'appliance'
    },
    {
      'id': 9,
      'title': '鞋包',
      'link': 'shoes'
    },
    {
      'id': 10,
      'title': '汽车',
      'link': 'cars'
    },
    {
      'id': 11,
      'title': '水果',
      'link': 'fruits'
    },
    {
      'id': 12,
      'title': '电脑',
      'link': 'computers'
    },
    {
      'id': 13,
      'title': '内衣',
      'link': 'underwears'
    },
    {
      'id': 14,
      'title': '家装',
      'link': 'home'
    },
    {
      'id': 15,
      'title': '母婴',
      'link': 'baby'
    },
    {
      'id': 16,
      'title': '美妆',
      'link': 'makeup'
    },
    {
      'id': 17,
      'title': '家具',
      'link': 'furnitures'
    }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
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
