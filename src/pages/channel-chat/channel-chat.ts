import { Component } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ChannelMessage } from '../../models/channel/channel-message.interface';
import { Channel } from '../../models/channel/channel.interface';
import { ChatProvider } from '../../providers/chat/chat';

/**
 * Generated class for the ChannelChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channel-chat',
  templateUrl: 'channel-chat.html',
})
export class ChannelChatPage {

  channel: Channel;
  channelMessages: FirebaseListObservable<ChannelMessage[]>;

  constructor(private chatService: ChatProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.channel = this.navParams.get('channel');
    this.channelMessages = this.chatService.getChannelChatRef(this.channel.$key);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChannelChatPage');
  }
  sendMessage(content: string) {
    let channelMessage: ChannelMessage = {
      content: content
    }

    this.chatService.sendChannelChatMessage(this.channel.$key, channelMessage)
  }

}
