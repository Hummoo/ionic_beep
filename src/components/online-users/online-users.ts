import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { NavController } from 'ionic-angular';

import { Profile } from '../../models/profile/profile.interface';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the OnlineUsersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'online-users',
  templateUrl: 'online-users.html'
})
export class OnlineUsersComponent implements OnInit {

  userList: FirebaseListObservable<Profile[]>;

  constructor(private navCtrl: NavController, private data: DataProvider) {
    console.log('Hello OnlineUsersComponent Component');
  }

  setUserOnline() {
    this.data.getAuthenticatedUserProfile().subscribe(profile => {
      this.data.setUserOnline(profile);
    })
  }

  public ngOnInit(): void {
    this.setUserOnline();
    this.getOnlineUsers();
  }

  getOnlineUsers() {
    this.userList = this.data.getOnlineUsers();
  }

  openChat(profile: Profile) {
    this.navCtrl.push('MessagePage', { profile });
  }
}
