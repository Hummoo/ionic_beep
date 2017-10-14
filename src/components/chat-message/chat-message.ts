import { Component, Input } from '@angular/core';

import { Message } from '../../models/messages/message';

/**
 * Generated class for the ChatMessageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chat-message',
  templateUrl: 'chat-message.html'
})
export class ChatMessageComponent {

  @Input() chatMessage: Message;
  @Input() userId: string;

  constructor() {
    console.log('Hello ChatMessageComponent Component');
  }

}
