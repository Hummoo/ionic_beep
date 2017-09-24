import { Component, Output } from '@angular/core';
import { ToastController } from 'ionic-angular';

import { Account } from '../../models/account/account.inteface';
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

  @Output() registerStatus;

  constructor(private auth: AuthProvider, private toast: ToastController) {
    console.log('Hello RegisterFormComponent Component');
  }

  async register() {
    try {
      const result = await this.auth.createUserWithEmailAndPassword(this.account);
      this.toast.create({
        message: "Account is successfully created.",
        duration: 3000
      }).present();
      console.log(result);
    } catch (e) {
      console.error(e);
      this.toast.create({
        message: e.message,
        duration: 3000
      }).present();
    }
  }

}
