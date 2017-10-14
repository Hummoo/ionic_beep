import { Component, EventEmitter, Output } from '@angular/core';

import { Account } from '../../models/account/account.inteface';
import { LoginResponse } from '../../models/login/login-response.interface';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.html'
})
export class RegisterFormComponent {

  account = {} as Account;

  @Output() registerStatus: EventEmitter<LoginResponse>;

  constructor(private auth: AuthProvider) {
    console.log('Hello RegisterFormComponent Component');
    this.registerStatus = new EventEmitter<LoginResponse>();
  }

  async register() {
    try {
      const result = await this.auth.createUserWithEmailAndPassword(this.account);
      console.log(result);
      this.registerStatus.emit(result);
    } catch (e) {
      console.error(e);
      this.registerStatus.emit(e);
    }
  }

}
