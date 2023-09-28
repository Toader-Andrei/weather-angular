import { Component, Input } from '@angular/core';
import { Weather } from 'src/app/Weather';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent {
  @Input() weatherData!: Weather;
}
