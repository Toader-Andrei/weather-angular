import { Component } from '@angular/core';

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.scss'],
})
export class TestInputComponent {
  username: string = '';
  recipient: string = '';
  email: string = '';

  onChangeUsername(username: any) {
    this.username = username;
  }
  onChangeRecipient(event: any) {
    this.recipient = event.target.value;
  }
}
