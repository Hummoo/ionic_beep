import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'firebase/app';
import { Loading, LoadingController } from 'ionic-angular';

import { Profile } from '../../models/profile/profile.interface';
import { AuthProvider } from '../../providers/auth/auth';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the ProfileViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-view',
  templateUrl: 'profile-view.html'
})
export class ProfileViewComponent implements OnInit {

  userProfile: Profile;
  loader: Loading;
  private authUser: User;

  @Output() existingProfile: EventEmitter<Profile>;

  constructor(private loading: LoadingController, private data: DataProvider, private auth: AuthProvider) {
    console.log('Hello ProfileViewComponent Component');

    this.existingProfile = new EventEmitter<Profile>();

    this.loader = this.loading.create({
      content: 'Loading Profile...'
    })
  }

  ngOnInit(): void {
    this.loader.present();

    this.data.getAuthenticatedUserProfile().subscribe(profile => {
      this.userProfile = profile;
      this.existingProfile.emit(this.userProfile);
      this.loader.dismiss();
    });
  }

}
