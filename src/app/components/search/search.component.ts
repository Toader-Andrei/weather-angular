import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Weather } from 'src/app/Weather';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() onWeather: EventEmitter<Weather> = new EventEmitter<Weather>();

  city!: string;

  constructor(private weatherService: WeatherService) {}

  onSubmit() {
    if (!this.city) {
      alert('Please enter a real city name');
    }

    this.weatherService.getCity(this.city).subscribe((cityLocation) => {
      console.log(cityLocation);

      this.weatherService
        .getWeather(cityLocation[0].lat, cityLocation[0].lon)
        .subscribe((weather) => {
          console.log(weather);

          this.onWeather.emit(weather);
          this.city = '';
        });
    });
  }
}
