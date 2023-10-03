import { Component, Input } from '@angular/core';
import { Air } from 'src/app/Air';

@Component({
  selector: 'app-pollution-card',
  templateUrl: './pollution-card.component.html',
  styleUrls: ['./pollution-card.component.scss'],
})
export class PollutionCardComponent {
  @Input() airPollution!: Air;

  showDetailsCard: boolean = false;

  onShowAirPollution() {
    this.showDetailsCard = true;
  }
}
