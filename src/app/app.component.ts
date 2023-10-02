import { Component } from '@angular/core';
import { Weather } from './Weather';
import { Air } from './Air';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  weatherData!: Weather;
  airPollution!: Air;

  addWeather(weather: Weather): void {
    this.weatherData = weather;
  }

  addAirPollution(airComponents: Air): void {
    this.airPollution = airComponents;
  }
}
