import { Component, Input } from '@angular/core';
import { Weather } from 'src/app/Weather';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent {
  @Input() weatherData!: Weather;

  getHour(time: string) {
    const date: Date = new Date(time);

    return date.getHours();
  }

  mathCeil(celcius: number) {
    return (celcius = Math.ceil(this.weatherData.list[0].main.temp));
  }
}
