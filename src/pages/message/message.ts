import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';

import { Message } from '../../models/messages/message';
import { Profile } from '../../models/profile/profile.interface';
import { AuthProvider } from '../../providers/auth/auth';
import { ChatProvider } from '../../providers/chat/chat';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  userProfile: Profile;
  userId: string;
  selectedProfile: Profile;
  messageList: Observable<Message[]>;

  constructor(private chat: ChatProvider, private data: DataProvider, private auth: AuthProvider, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewWillLoad() {
    this.selectedProfile = this.navParams.get('profile');
    this.data.getAuthenticatedUserProfile().subscribe(profile => {
      this.userProfile = profile;
      this.userId = profile.$key;
    });

    this.messageList = this.chat.getChats(this.selectedProfile.$key);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }

  async sendMessage(content: string) {
    try {
      const message: Message = {
        content: content,
        userToId: this.selectedProfile.$key,
        userToProfile: {
          firstName: this.selectedProfile.firstName,
          lastName: this.selectedProfile.lastName
        },
        userFromId: this.userId,
        userFromProfile: {
          firstName: this.userProfile.firstName,
          lastName: this.userProfile.lastName
        }
      }

      console.log(message);

      await this.chat.sendChat(message);
    } catch (e) {
      console.log(e);
    }
  }
}
