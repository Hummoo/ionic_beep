import { Component, EventEmitter, Output } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Account } from '../../models/account/account.inteface';
import { LoginResponse } from '../../models/login/login-response.interface';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  account = {} as Account;

  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(private auth: AuthProvider, public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello LoginFormComponent Component');
    this.loginStatus = new EventEmitter<any>();
  }

  async login() {
    const loginResponse = await this.auth.signWithEmailAndPassword(this.account);
    this.loginStatus.emit(loginResponse);
  }

  /* navigateToPage(pageName: string) {
    pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  } */

  navigateToRegisterPage() {
    this.navCtrl.push('RegisterPage');
  }
}
