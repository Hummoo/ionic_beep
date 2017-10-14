import { Component, EventEmitter, Output } from '@angular/core';

/**
 * Generated class for the SendMessageBoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'send-message-box',
  templateUrl: 'send-message-box.html'
})
export class SendMessageBoxComponent {

  @Output() sendMessage: EventEmitter<string>;

  content: string;

  constructor() {
    console.log('Hello SendMessageBoxComponent Component');
    this.sendMessage = new EventEmitter<string>();
  }

  send() {
    this.sendMessage.emit(this.content);
    this.content = "";
  }
}
