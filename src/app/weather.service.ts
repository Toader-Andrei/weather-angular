import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from './City';
import { Observable } from 'rxjs';
import { Weather } from './Weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getCity(city: string): Observable<City[]> {
    return this.http.get<City[]>(
      'http://api.openweathermap.org/geo/1.0/direct?q=' +
        city +
        '&limit=1&appid=2520ce5d5a48c4406277d6400f51ebaa'
    );
  }

  getWeather(lat: number, lon: number): Observable<Weather> {
    return this.http.get<Weather>(
      'https://api.openweathermap.org/data/2.5/forecast?lat=' +
        lat +
        '&lon=' +
        lon +
        '&appid=2520ce5d5a48c4406277d6400f51ebaa&units=metric'
    );
  }
}
