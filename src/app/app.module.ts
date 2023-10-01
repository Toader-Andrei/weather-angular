import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PollutionCardComponent } from './components/pollution-card/pollution-card.component';
import { TestInputComponent } from './components/test-input/test-input.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WeatherCardComponent,
    PollutionCardComponent,
    TestInputComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
