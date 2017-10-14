import { Component } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

import { Channel } from '../../models/channel/channel.interface';
import { ChatProvider } from '../../providers/chat/chat';

/**
 * Generated class for the ChannelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channels',
  templateUrl: 'channels.html',
})
export class ChannelsPage {

  channelList: FirebaseListObservable<Channel[]>;

  constructor(private chatService: ChatProvider, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.getChannels();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChannelsPage');
  }

  getChannels() {
    this.channelList = this.chatService.getChannelListRef();
  }

  selectChannel(channel: Channel) {
    this.navCtrl.push('ChannelChatPage', { channel: channel });
  }

  showAddChannelDialog() {
    this.alertCtrl.create({
      title: 'Channel Name',
      inputs: [{
        name: 'channelName'
      }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: data => {
            this.chatService.addChannel(data.channelName);
          }
        }
      ]
    }).present();
  }

}
