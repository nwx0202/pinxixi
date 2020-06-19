import { Component, ViewChildren } from '@angular/core';
import { TopMenu, ImageSlider, ImageSliderComponent } from './shared/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChildren('imageSlider') imageSlider: ImageSliderComponent;
  username;

  topMenus: TopMenu[] = [{
    title: '热门',
    link: ''
  }, {
    title: '男装',
    link: ''
  }, {
    title: '百货',
    link: ''
  }, {
    title: '运动',
    link: ''
  }, {
    title: '手机',
    link: ''
  }, {
    title: '家纺',
    link: ''
  }, {
    title: '食品',
    link: ''
  }, {
    title: '电器',
    link: ''
  }, {
    title: '鞋包',
    link: ''
  }, {
    title: '汽车',
    link: ''
  }, {
    title: '水果',
    link: ''
  }, {
    title: '电脑',
    link: ''
  }, {
    title: '内衣',
    link: ''
  }, {
    title: '家装',
    link: ''
  }, {
    title: '母婴',
    link: ''
  }, {
    title: '美妆',
    link: ''
  }, {
    title: '家具',
    link: ''
  }];

  imageSliders: ImageSlider[] = [
    {
      'id': 1,
      'imgUrl': 'http://ngassets.twigcodes.com/banner001.png',
      'link': '',
      'caption': ''
    },
    {
      'id': 2,
      'imgUrl': 'http://ngassets.twigcodes.com/banner002.png',
      'link': '',
      'caption': ''
    },
    {
      'id': 3,
      'imgUrl': 'http://ngassets.twigcodes.com/banner003.png',
      'link': '',
      'caption': ''
    },
    {
      'id': 4,
      'imgUrl': 'http://ngassets.twigcodes.com/banner004.png',
      'link': '',
      'caption': ''
    },
    {
      'id': 5,
      'imgUrl': 'http://ngassets.twigcodes.com/banner005.png',
      'link': '',
      'caption': ''
    }
  ];

  handleTabSelected(topMenu: TopMenu) {
    // console.log(topMenu);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // console.log(this.imageSlider);
  }
}
