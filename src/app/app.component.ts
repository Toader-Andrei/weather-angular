import { Component } from '@angular/core';
import { City } from './City';
import { Weather } from './Weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  weatherData!: Weather;

  addWeather(weather: Weather): void {
    this.weatherData = weather;
  }
}
