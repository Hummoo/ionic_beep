import { Component, EventEmitter, Output } from '@angular/core';

import { Profile } from '../../models/profile/profile.interface';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the ProfileSearchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-search',
  templateUrl: 'profile-search.html'
})
export class ProfileSearchComponent {

  query: string;

  profileList: Profile[];

  @Output() selectedProfile: EventEmitter<Profile>;

  constructor(private data: DataProvider) {
    console.log('Hello ProfileSearchComponent Component');
    this.selectedProfile = new EventEmitter<Profile>();
  }

  searchUser(query: string) {
    const trimmedQuery = query.trim();

    if (trimmedQuery.toLocaleLowerCase() === query.toLocaleLowerCase()) {
      this.data.searchUser(trimmedQuery).subscribe(profile => {
        this.profileList = profile;
      });
    }
  }

  selectProfile(profile: Profile) {
    this.selectedProfile.emit(profile);
  }
}
