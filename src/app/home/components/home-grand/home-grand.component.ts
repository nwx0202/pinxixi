import { Component, OnInit, Injectable, Injector, InjectionToken } from '@angular/core';

@Injectable()
class Product {
  constructor(private name: string, private color: string) {

  }
}

@Injectable()
class PurchaseOrder {
  constructor(private product: Product, private amount: number) {
    // this.product = new Product('大米手机');
  }
}

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

    const token = new InjectionToken<string>('baseUrl');
    const injector = Injector.create({
      providers: [
        {
          provide: Product,
          useFactory: () => {
            return new Product('大米手机', '黑色');
          },
          deps: []
        }, {
          provide: PurchaseOrder,
          useClass: PurchaseOrder,
          deps: [Product]
        }, {
          provide: token,
          useValue: 'http://localhost'
        }
      ]
    });

    console.log(injector.get(Product));
    console.log(injector.get(PurchaseOrder));
    console.log(injector.get(token));
  }

  minusDay(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }

}
