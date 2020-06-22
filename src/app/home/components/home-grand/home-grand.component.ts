import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {
  price: number;
  date: Date;

  constructor() {}

  ngOnInit() {
    this.price = 123.23;
    this.date = this.minusDay(new Date(), 90 );
  }

  minusDay(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }

}
