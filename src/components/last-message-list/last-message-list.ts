import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';

import { Message } from '../../models/messages/message';
import { ChatProvider } from '../../providers/chat/chat';

/**
 * Generated class for the LastMessageListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'last-message-list',
  templateUrl: 'last-message-list.html'
})
export class LastMessageListComponent implements OnInit {

  messageList$: Observable<Message[]>;

  constructor(private chat: ChatProvider, private navCtrl: NavController) {
    console.log('Hello LastMessageListComponent Component');
  }

  public ngOnInit() {
    this.messageList$ = this.chat.getLastMessagesForUser();
  }

  navigateToMessage(message: Message) {
    const selectedProfile = {
      $key: message.userToId,
      fistName: message.userToProfile.firstName,
      lasName: message.userToProfile.lastName
    };

    this.navCtrl.push('MessagePage', { profile: selectedProfile });
  }
}
