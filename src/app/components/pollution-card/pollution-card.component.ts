import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pollution-card',
  templateUrl: './pollution-card.component.html',
  styleUrls: ['./pollution-card.component.scss'],
})
export class PollutionCardComponent {
  @Input() pollutionData!: any;
}
