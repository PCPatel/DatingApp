import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './WeatherForecast.component.html',
  styleUrls: ['./WeatherForecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  weatherforecast: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getWeatherForecast();
  }

  getWeatherForecast() {
    this.http.get('https://localhost:5001/WeatherForecast/').subscribe(
      response => {
        this.weatherforecast = response;
      },
      error => {
        console.log(error);
      });
  }

}
