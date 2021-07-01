import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.scss']
})
export class SecondChildComponent implements OnInit {

  weatherData: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const api = this.http.get<any>('http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=fac784e2ad1af94ec2014cc00cac5fb9');

    api.subscribe((response) => {
      this.weatherData = JSON.stringify(response);
    });
  }

}
