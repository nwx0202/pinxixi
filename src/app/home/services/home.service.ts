import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TopMenu, ImageSlider, Channel } from 'src/app/shared/components';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getTabs() {
    return this.http.get<TopMenu[]>(`${environment.baseUrl}/tabs`, {
      params: {icode: `${environment.icode}`}
    });
  }

  getChannels() {
    return this.http.get<Channel[]>(`${environment.baseUrl}/channels`, {
      params: {icode: `${environment.icode}`}
    });
  }

  getBanners() {
    return this.http.get<ImageSlider[]>(`${environment.baseUrl}/banners`, {
      params: {icode: `${environment.icode}`}
    });
  }
}