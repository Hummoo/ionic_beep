import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/take';

import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { database } from 'firebase';
import { User } from 'firebase/app';

import { Profile } from '../../models/profile/profile.interface';
import { AuthProvider } from '../auth/auth';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  profileObject: FirebaseObjectObservable<Profile>;
  profileList: FirebaseListObservable<Profile>;

  constructor(private auth: AuthProvider, private database: AngularFireDatabase) {
    console.log('Hello DataProvider Provider');
  }

  getProfile(user: User) {
    this.profileObject = this.database.object(`/profiles/${user.uid}`, { preserveSnapshot: true });
    return this.profileObject.take(1);
  }

  async saveProfile(user: User, profile: Profile) {
    this.profileObject = this.database.object(`/profiles/${user.uid}`);
    try {
      await this.profileObject.set(profile);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  searchUser(firstName: string) {
    const query = this.database.list('/profiles', {
      query: {
        orderByChild: 'firstName',
        equalTo: firstName
      }
    });

    return query.take(1);
  }

  getAuthenticatedUserProfile() {
    return this.auth.getAuthenticatedUser()
      .map(user => user.uid)
      .mergeMap(authId => this.database.object(`profiles/${authId}`))
      .take(1);
  }

  setUserOnline(profile: Profile) {
    const ref = database().ref(`online-users/${profile.$key}`);

    try {
      ref.update({ ...profile });
      ref.onDisconnect().remove();
    } catch (e) {
      console.log(e);
    }
  }

  getOnlineUsers(): FirebaseListObservable<Profile[]> {
    return this.database.list(`online-users`);
  }
}
